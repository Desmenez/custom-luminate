import { forwardRef, useId, useMemo, useState } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { reactQueryClient } from '@app/core/services'
import { faEdit } from '@fortawesome/pro-regular-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'

import { mainContract } from '@luminate/rest'
import { getQueryKey } from '@luminate/ts-rest-query'
import {
  Button,
  FontAwesomeIcon,
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  toast,
} from '@luminate/ui'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'
import { RatingStars } from '../../components/rating-stars'
import { SectionProps } from '../../types/section'
import { Review } from './review'
import { ReviewForm } from './review-form'
import { ReviewFormMode, ReviewFormSchema, UpdateReviewSchema } from './schema'
import { ReviewSkeleton } from './skeleton'
import { ReviewDTO } from './types'
import { formatRating } from './utils'

interface ReviewSectionProps extends SectionProps {
  initialAverageRating?: number
  initialReviewCount?: number
  initialReviews?: ReviewDTO[]
  reviewLimit?: number
}

const DEFAULT_REVIEW_LIMIT = 3

export const ReviewSection = forwardRef<HTMLDivElement, ReviewSectionProps>(
  (
    {
      courseId,
      reviewLimit = DEFAULT_REVIEW_LIMIT,
      initialAverageRating = 0,
      initialReviewCount = 0,
      initialReviews = [],
      isEnrolled,
    },
    ref
  ) => {
    // Internal state
    const [reviewPage, setReviewPage] = useState(1)
    const [openReviewForm, setOpenReviewForm] = useState(false)

    // Toast ID
    const createOrUpdateReviewToastId = useId()
    const formErrorToastId = useId()

    // Query and mutation
    const queryClient = useQueryClient()

    const { data: reviewStats, isLoading: isReviewStatsLoading } =
      reactQueryClient.liveCourse.getLiveCourseCommentsTotalAndRating.useQuery(
        { params: { liveCourseId: courseId } },
        {
          refetchOnWindowFocus: false,
          initialData: {
            status: 200,
            body: {
              rating: initialAverageRating,
              total: initialReviewCount,
              isUserCommented: false,
            },
            headers: {} as Headers,
          },
        }
      )

    const getReviewMetadata = () => {
      const totalPages = Math.ceil((reviewStats?.body.total ?? 0) / reviewLimit)
      return { currentPage: reviewPage, totalPages }
    }

    const reivewMetadata = getReviewMetadata()

    const take = reviewLimit
    const skip = (reivewMetadata.currentPage - 1) * reviewLimit

    const {
      data: reviews,
      isLoading: isReviewsLoading,
      isFetching: isReviewFetching,
    } = reactQueryClient.liveCourse.getLiveCourseComments.useQuery(
      { query: { liveCourseId: courseId, take, skip } },
      {
        refetchOnWindowFocus: false,
        initialData: {
          status: 200,
          body: { comments: initialReviews },
          headers: {} as Headers,
        },
        keepPreviousData: true,
      }
    )

    const { mutateAsync: mutateCreateReview } =
      reactQueryClient.liveCourse.createLiveCourseComment.useMutation({
        onSuccess: () => {
          setOpenReviewForm(false)
          form.reset()
          form.setValue('mode', ReviewFormMode.CREATE)

          // Optimistically update review stats
          reactQueryClient.liveCourse.getLiveCourseCommentsTotalAndRating.setQueryData(
            queryClient,
            { params: { liveCourseId: courseId } },
            {
              status: 200,
              body: {
                rating: (reviewStats?.body.rating ?? 0) + 1,
                total: (reviewStats?.body.total ?? 0) + 1,
                isUserCommented: true,
              },
              headers: {} as Headers,
            }
          )
          // Invalidate reviews query
          const getLiveCourseCommentsKey = getQueryKey(
            mainContract.liveCourse.getLiveCourseComments,
            { query: { liveCourseId: courseId, take, skip: 0 } }
          )
          queryClient.invalidateQueries({
            queryKey: getLiveCourseCommentsKey.slice(0, -1),
          })
          setReviewPage(1)
        },
      })

    const { mutateAsync: mutateUpdateReview } =
      reactQueryClient.liveCourse.updateLiveCourseComment.useMutation({
        onSuccess: () => {
          setOpenReviewForm(false)
          form.reset()
          form.setValue('mode', ReviewFormMode.UPDATE)
          // Invalidate reviews query
          const getLiveCourseCommentsKey = getQueryKey(
            mainContract.liveCourse.getLiveCourseComments,
            {
              query: { liveCourseId: courseId, take, skip: 0 },
            }
          )
          queryClient.invalidateQueries(getLiveCourseCommentsKey)
          setReviewPage(1)
        },
      })

    const form = useForm<ReviewFormSchema>({
      resolver: zodResolver(ReviewFormSchema),
    })

    const displayedReviews = useMemo(() => {
      const myReview = reviews?.body.comments.find((review) => review.isMyComment)
      const otherReviews = reviews?.body.comments.filter((review) => !review.isMyComment) ?? []
      return myReview ? [myReview, ...otherReviews] : otherReviews
    }, [reviews?.body.comments])

    if (isReviewsLoading || isReviewStatsLoading) return <div>Loading...</div> // TODO: loading ui

    const handleCreateReviewClick = () => {
      form.setValue('mode', ReviewFormMode.CREATE)
      setOpenReviewForm(true)
    }

    const handleUpdateReviewClick = (data: UpdateReviewSchema) => {
      form.setValue('mode', ReviewFormMode.UPDATE)
      form.setValue('stars', data.stars)
      form.setValue('description', data.description)
      setOpenReviewForm(true)
    }

    const onError: SubmitErrorHandler<ReviewFormSchema> = (error) => {
      // TODO: use proper error handling
      toast.error('กรุณากรอกข้อมูลให้ครบถ้วน', { id: formErrorToastId })
    }

    const onSubmit: SubmitHandler<ReviewFormSchema> = async (data) => {
      if (data.mode === ReviewFormMode.CREATE) {
        await toast.promise(
          mutateCreateReview({
            body: {
              liveCourseId: courseId,
              description: data.description,
              stars: data.stars,
            },
          }),
          {
            loading: 'กำลังส่งรีวิว...',
            success: 'ส่งรีวิวสำเร็จ',
            error: 'เกิดข้อผิดพลาดในการส่งรีวิว',
          },
          { id: createOrUpdateReviewToastId }
        )
      }
      if (data.mode === ReviewFormMode.UPDATE) {
        await toast.promise(
          mutateUpdateReview({
            body: {
              liveCourseId: courseId,
              description: data.description,
            },
          }),
          {
            loading: 'กำลังแก้ไขรีวิว...',
            success: 'แก้ไขรีวิวสำเร็จ',
            error: 'เกิดข้อผิดพลาดในการแก้ไขรีวิว',
          },
          { id: createOrUpdateReviewToastId }
        )
      }
    }

    const onPageChanged = (page: number) => setReviewPage(page)

    const shouldEnableCreateReviewButton = isEnrolled && !reviewStats?.body.isUserCommented

    return (
      <CourseDetailSection ref={ref}>
        <CourseDetailSectionTitle>รีวิวจากผู้เรียน</CourseDetailSectionTitle>
        <div className="flex flex-col md:flex-row gap-2 gap-y-4 justify-between">
          {/* Left-hand side */}
          <div className="flex gap-4 items-center">
            {reviewStats && (
              <>
                <div>{formatRating(reviewStats.body.rating)}</div>
                <RatingStars rating={reviewStats.body.rating} />
                <div>{reviewStats.body.total} รีวิว</div>
              </>
            )}
          </div>

          {/* Right-hand side */}
          <Button
            variant="outline"
            leftIcon={<FontAwesomeIcon icon={faEdit} className="h-4 w-4" />}
            onClick={handleCreateReviewClick}
            disabled={!shouldEnableCreateReviewButton}
          >
            เขียนรีวิว
          </Button>
        </div>

        {/* Review Form */}
        <FormProvider {...form}>
          <ReviewForm
            open={openReviewForm}
            setOpen={setOpenReviewForm}
            onSubmit={onSubmit}
            onError={onError}
          />
        </FormProvider>

        {/* Reviews Skeleton */}
        {isReviewFetching &&
          Array.from({ length: reviewLimit }).map((_, index) => <ReviewSkeleton key={index} />)}

        {/* Reviews */}
        {!isReviewFetching &&
          displayedReviews?.map((review) => (
            <Review
              key={`${review.liveCourseId}-${review.userId}`}
              {...review}
              onEdit={handleUpdateReviewClick}
            />
          ))}

        {reivewMetadata.totalPages > 0 && (
          <Pagination
            value={reviewPage}
            totalPages={reivewMetadata.totalPages}
            className="m-auto"
            onChange={onPageChanged}
          >
            <PaginationPrevious>
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            </PaginationPrevious>
            <PaginationList />
            <PaginationNext>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </PaginationNext>
          </Pagination>
        )}
      </CourseDetailSection>
    )
  }
)

ReviewSection.displayName = 'ReviewSection'
