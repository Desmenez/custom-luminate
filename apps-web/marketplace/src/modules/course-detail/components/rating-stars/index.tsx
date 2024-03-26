import { forwardRef } from 'react'

import { faStar as faOutlinedStar } from '@fortawesome/pro-regular-svg-icons'
import { faStar as faSolidStar } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon, cn } from '@luminate/ui'

interface RatingStarsProps {
  rating: number
  size?: number
  editable?: boolean
  onChange?: (rating: number) => void
}

export const RatingStars = forwardRef<HTMLDivElement, RatingStarsProps>(
  ({ rating, size, editable, onChange }, ref) => {
    const toStarProps = (rating: number) => {
      const baseStarProps: BaseStarProps[] = []
      let currentRating = rating
      for (let i = 0; i < 5; i++) {
        if (currentRating >= 1) baseStarProps.push({ percent: 1, size })
        else if (currentRating > 0) baseStarProps.push({ percent: currentRating, size })
        else baseStarProps.push({ percent: 0, size })
        currentRating -= 1
      }
      return baseStarProps
    }

    const baseStarProps = toStarProps(rating)

    const onValueChange = (value: number) => {
      if (!editable) return
      onChange?.(value)
    }

    return (
      <div className="flex flex-row gap-1" ref={ref}>
        {baseStarProps.map((props, index) => (
          <BaseStar
            key={index}
            {...props}
            onClick={() => onValueChange(index + 1)}
            className={cn(editable && 'cursor-pointer')}
          />
        ))}
      </div>
    )
  }
)
RatingStars.displayName = 'RatingStars'

interface BaseStarProps {
  /**
   * The percent of the star to fill. Defaults to 1. 1 = 100%, 0.5 = 50%, etc.
   */
  percent?: number
  size?: number
  onClick?: () => void
  className?: string
}

const BaseStar: React.FC<BaseStarProps> = ({ percent = 1, size = 24, onClick, className }) => {
  return (
    <div
      className={cn('relative', className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faSolidStar}
        className="text-yellow-300 absolute inset-0 scale-[0.8]"
        style={{
          clipPath: `inset(0% ${(1 - percent) * 100}% 0% 0%)`,
        }}
      />
      <FontAwesomeIcon icon={faOutlinedStar} className="text-yellow-300 absolute inset-0" />
    </div>
  )
}
