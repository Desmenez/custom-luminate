import { faStar as faOutlinedStar } from '@fortawesome/pro-regular-svg-icons'
import { faStar as faSolidStar } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@luminate/ui'

interface BaseStarProps {
  /**
   * The percent of the star to fill. Defaults to 1. 1 = 100%, 0.5 = 50%, etc.
   */
  percent?: number

  size?: number
}

export const BaseStar: React.FC<BaseStarProps> = ({ percent = 1, size = 24 }) => {
  return (
    <div
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <FontAwesomeIcon icon={faOutlinedStar} className="text-yellow-400 absolute inset-0 z-[1]" />
      <FontAwesomeIcon
        icon={faSolidStar}
        className="text-yellow-400 absolute inset-0 scale-[0.8]"
        style={{
          clipPath: `inset(0% ${(1 - percent) * 100}% 0% 0%)`,
        }}
      />
    </div>
  )
}
