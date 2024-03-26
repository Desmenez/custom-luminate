import { container } from '@app/container'

import { Prisma } from '@luminate/database'
import {
  GetLiveCourseCommentsArgs,
  LiveCourseCommentCreateInput,
  LiveCourseCommentDeleteInput,
} from '@luminate/rest'

export class CommentAdapter {
  commentCreateInput(
    args: LiveCourseCommentCreateInput,
    userId: string
  ): Prisma.LiveCourseCommentCreateArgs {
    return {
      data: {
        userId,
        liveCourseId: args.liveCourseId,
        description: args.description ?? undefined,
        stars: args.stars,
      },
    }
  }

  commentDeleteArgs(args: LiveCourseCommentDeleteInput): Prisma.LiveCourseCommentDeleteArgs {
    return {
      where: {
        liveCourseId_userId: {
          liveCourseId: args.liveCourseId,
          userId: args.userId,
        },
      },
    }
  }

  findManyCommentArgs(args: GetLiveCourseCommentsArgs): Prisma.LiveCourseCommentFindManyArgs {
    return {
      where: {
        liveCourseId: args.liveCourseId,
      },
      take: args.take,
      skip: args.skip,
      orderBy: {
        createdAt: 'desc',
      },
    }
  }
}

container.registerSingleton<CommentAdapter>()
