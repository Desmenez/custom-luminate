import { faEdit } from '@fortawesome/pro-regular-svg-icons'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  FontAwesomeIcon,
  Separator,
  cn,
} from '@luminate/ui'

import { RatingStars } from '../../components/rating-stars'
import { ReviewFormMode, UpdateReviewSchema } from './schema'
import { ReviewDTO } from './types'
import { formatDateAndTime, formatRating } from './utils'

export type ReviewProps = ReviewDTO & {
  onEdit?: (data: UpdateReviewSchema) => void
}

export const Review: React.FC<ReviewProps> = ({
  user,
  stars,
  description,
  isMyComment,
  updatedAt,
  userUpdatedAt,
  onEdit,
}) => {
  // TODO: create a hook to get user identity
  const getNameInitials = () => {
    if (!user?.displayName) return 'U'
    const [firstName, lastName] = user.displayName.split(' ')
    if (firstName && lastName) return `${firstName[0]}${lastName[0]}`.toUpperCase()
    return user.displayName[0].toUpperCase()
  }

  const nameInitials = getNameInitials()

  const handleEdit = () => {
    if (!isMyComment) return
    onEdit?.({ mode: ReviewFormMode.UPDATE, description, stars })
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-4 p-4 text-gray-50 text-base border border-gray-700 rounded-lg',
        isMyComment && 'bg-gray-800'
      )}
    >
      {/* Top part */}
      <div className="flex justify-between gap-2 flex-wrap">
        {/* Profile Part */}
        <div className="flex gap-4">
          {/* Left-hand side */}
          <Avatar className="h-8 w-8">
            {user?.profileUrl && <AvatarImage src={user.profileUrl} />}
            <AvatarFallback>{nameInitials}</AvatarFallback>
          </Avatar>

          {/* Right-hand side */}
          <div className="flex flex-col">
            <div>{user?.displayName}</div>
            <div className="text-gray-500 text-xs">{formatDateAndTime(updatedAt)}</div>
          </div>
        </div>

        {/* Rating Part */}
        <div className="flex items-center gap-4">
          <div>{formatRating(stars)}</div>
          <RatingStars rating={stars} />
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Comment Part */}
      <p>{description}</p>

      {/* Edit Part - Show only if the user is the review's owner */}
      {isMyComment && (
        <div className="flex justify-end">
          <Button
            leftIcon={<FontAwesomeIcon icon={faEdit} className="w-4 h-4" />}
            size="xs"
            variant="outline"
            className="px-6 bg-transparent"
            disabled={!!userUpdatedAt} // User allow to edit only 1 times after review is created
            onClick={handleEdit}
          >
            แก้ไข
          </Button>
        </div>
      )}
    </div>
  )
}
