import { container } from '@app/container'

import { LiveCourseComment, PrismaClient } from '@luminate/database'
import { BadInputError } from '@luminate/error'
import {
  GetLiveCourseCommentsArgs,
  GetLiveCourseCommentsResponse,
  GetLiveCourseCommentsTotalAndRatingResponse,
  LiveCourseCommentCreateInput,
  LiveCourseCommentDeleteInput,
  LiveCourseCommentUpdateInput,
} from '@luminate/rest'

import { CommentAdapter } from '.'
import { UserRepository } from '../user'

export class CommentService {
  constructor(
    private prisma: PrismaClient,
    private commentAdapter: CommentAdapter,
    private userRepository: UserRepository
  ) {}

  async createComment(userId: string, args: LiveCourseCommentCreateInput) {
    return this.prisma.liveCourseComment.create(
      this.commentAdapter.commentCreateInput(args, userId)
    )
  }

  async updateComment(
    userId: string,
    args: LiveCourseCommentUpdateInput
  ): Promise<LiveCourseComment> {
    const comment = await this.prisma.liveCourseComment.findUnique({
      where: { liveCourseId_userId: { userId, liveCourseId: args.liveCourseId } },
    })
    if (!comment || comment.userUpdatedAt != null) {
      throw new BadInputError('marketplace', 'ALREADY_UPDATED', 'You already updated')
    }
    return await this.prisma.liveCourseComment.update({
      where: {
        liveCourseId_userId: {
          userId,
          liveCourseId: args.liveCourseId,
        },
      },
      data: {
        description: args.description,
        userUpdatedAt: new Date(),
      },
    })
  }

  deleteComment(args: LiveCourseCommentDeleteInput): Promise<LiveCourseComment> {
    return this.prisma.liveCourseComment.delete(this.commentAdapter.commentDeleteArgs(args))
  }

  isUserCommented(liveCourseId: string, userId?: string) {
    if (!userId) return false
    return this.prisma.liveCourseComment
      .findUnique({
        where: {
          liveCourseId_userId: { liveCourseId, userId },
        },
      })
      .then((comment) => !!comment)
  }

  async findManyComments(
    args: GetLiveCourseCommentsArgs,
    userId: string | undefined
  ): Promise<GetLiveCourseCommentsResponse> {
    const liveCourseComments = await this.prisma.liveCourseComment.findMany(
      this.commentAdapter.findManyCommentArgs(args)
    )
    const userIds = liveCourseComments.map((comment) => comment.userId)
    if (!userIds.length) {
      return {
        comments: [],
      }
    }
    const users = await this.userRepository.findByIds(userIds)
    const commentsWithUser = liveCourseComments.map((comment, index) => ({
      ...comment,
      user: users[index],
      isMyComment: userId === comment.userId,
    }))
    return {
      comments: commentsWithUser.map((comment) => ({
        ...comment,
      })),
    }
  }

  async getTotalAndRating(
    liveCourseId: string,
    userId?: string
  ): Promise<GetLiveCourseCommentsTotalAndRatingResponse> {
    const [total, rating, isUserCommented] = await Promise.all([
      this.getTotal(liveCourseId),
      this.getAverateRating(liveCourseId),
      this.isUserCommented(liveCourseId, userId),
    ])
    return { total, rating, isUserCommented }
  }

  async getAverateRating(id: string): Promise<number> {
    try {
      const avg = await this.prisma.liveCourseComment.aggregate({
        _avg: {
          stars: true,
        },
        where: {
          liveCourseId: id,
        },
      })
      return avg._avg.stars ? avg._avg.stars : 0
    } catch (error) {
      return 0
    }
  }

  async getTotal(id: string) {
    return await this.prisma.liveCourseComment.count({
      where: {
        liveCourseId: id,
      },
    })
  }
}

container.registerSingleton<CommentService>()
