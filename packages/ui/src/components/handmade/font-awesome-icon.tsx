import type { SVGProps } from 'react'

import type { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type FontAwesomeIconProps = SVGProps<SVGSVGElement> & { icon: IconDefinition }

const xmlns = 'http://www.w3.org/2000/svg'

export function FontAwesomeIcon(props: FontAwesomeIconProps) {
  const { children, icon: iconProps, ...rest } = props

  const { icon, iconName, prefix } = iconProps
  const [width, height, , , svgPathData] = icon

  const dataFa = `${prefix}-${iconName}`

  return (
    <svg
      aria-hidden="true"
      data-fa={dataFa}
      role={'img'}
      viewBox={`0 0 ${width} ${height}`}
      xmlns={xmlns}
      {...rest}
    >
      {children}
      {Array.isArray(svgPathData) ? (
        <g>
          {svgPathData.map((pathData) => (
            <path d={pathData} fill="currentColor" />
          ))}
        </g>
      ) : (
        <path d={svgPathData} fill="currentColor" />
      )}
    </svg>
  )
}
