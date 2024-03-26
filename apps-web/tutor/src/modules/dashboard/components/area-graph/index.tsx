import { useCallback, useId, useMemo } from 'react'

import { Axis } from '@visx/axis'
import { curveLinear } from '@visx/curve'
import { localPoint } from '@visx/event'
import { LinearGradient } from '@visx/gradient'
import { GridColumns, GridRows } from '@visx/grid'
import { Group } from '@visx/group'
import { scaleLinear, scaleTime } from '@visx/scale'
import { AreaClosed, Bar, Line, LinePath } from '@visx/shape'
import { withTooltip } from '@visx/tooltip'
import { extent, max } from '@visx/vendor/d3-array'
import { differenceInDays } from 'date-fns'

import { useMediaQuery } from '@luminate/react-hooks'
import { StudentGraphDataPoint } from '@luminate/rest'
import { cn } from '@luminate/ui'

import { bisectDate, getDate, getStudentCountValue } from './accessors'
import {
  background,
  background2,
  curveColor,
  gridStorkeColor,
  guideLineColor,
  tickLabelProps,
} from './styles'
import { formatDateString } from './utils'

type Size =
  | number
  | {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }

interface GraphProps {
  width: number
  height: number
  margin?: Size
  padding?: Size
  dataPoints: StudentGraphDataPoint[]
  selectedDataPointDate?: string
  domain?: [Date, Date]
}

const MINIMUM_PADDING = 28

export const AreaGraph: React.FC<GraphProps> = withTooltip<GraphProps, StudentGraphDataPoint>(
  ({
    width,
    height,
    margin: _margin,
    padding: _padding = MINIMUM_PADDING,
    dataPoints,
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    selectedDataPointDate,
    domain = extent(dataPoints, getDate) as [Date, Date],
  }) => {
    const isLgUp = useMediaQuery('lg-up')

    // Construct margin and padding object
    const margin = {
      top: typeof _margin === 'number' ? _margin : _margin?.top ?? 0,
      right: typeof _margin === 'number' ? _margin : _margin?.right ?? 0,
      bottom: typeof _margin === 'number' ? _margin : _margin?.bottom ?? 0,
      left: typeof _margin === 'number' ? _margin : _margin?.left ?? 0,
    }
    const padding = {
      top: Math.min(typeof _padding === 'number' ? _padding : _padding?.top ?? 0, MINIMUM_PADDING),
      right: Math.min(
        typeof _padding === 'number' ? _padding : _padding?.right ?? 0,
        MINIMUM_PADDING
      ),
      bottom: Math.min(
        typeof _padding === 'number' ? _padding : _padding?.bottom ?? 0,
        MINIMUM_PADDING
      ),
      left: Math.min(
        typeof _padding === 'number' ? _padding : _padding?.left ?? 0,
        MINIMUM_PADDING
      ),
    }

    const backgroundGradientId = useId()
    const accentGradientId = useId()
    // const clipPathId = useId()
    const getUrl = (id: string) => `url(#${id})`

    // Bounds
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const graphWidth = innerWidth - padding.left - padding.right
    const graphHeight = innerHeight - padding.top - padding.bottom

    // Calculated fields
    const maxStudentCount = useMemo(() => max(dataPoints, getStudentCountValue) || 0, [dataPoints])

    // Animated fiels
    // const [clipPathRectProps] = useSpring(
    //   {
    //     from: { width: 0 },
    //     to: { width: innerWidth },
    //     config: { duration: 1500 },
    //     delay: 500,
    //   },
    //   [dataPoints, innerWidth]
    // )
    // const [selectedDataPointDateProps] = useSpring(
    //   {
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    //     config: { duration: 1500 },
    //     delay: 500,
    //   },
    //   [dataPoints, innerWidth]
    // )

    // Scalers
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left + padding.left, graphWidth + margin.left + padding.left],
          domain: domain,
        }),
      [dataPoints, graphWidth, margin.left, padding.left, domain]
    )
    const studentCountValueScale = useMemo(
      () =>
        scaleLinear({
          range: [graphHeight + margin.top + padding.top, margin.top + padding.top],
          domain: [0, maxStudentCount + graphHeight / 3],
          nice: true,
        }),
      [graphHeight, margin.top, maxStudentCount, padding.top]
    )

    // Tooltip handlers
    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x } = localPoint(event) || { x: 0 }
        const x0 = dateScale.invert(x)
        const index = bisectDate(dataPoints, x0, 1)
        const d0 = dataPoints[index - 1]
        const d1 = dataPoints[index]
        let data = d0
        if (d1 && getDate(d1)) {
          data =
            x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0
        }
        showTooltip({
          tooltipData: data,
          tooltipLeft: x,
          tooltipTop: studentCountValueScale(getStudentCountValue(data)),
        })
      },
      [dateScale, dataPoints, showTooltip, studentCountValueScale]
    )

    const days = differenceInDays(domain[1], domain[0]) + 1

    const getAxisColNumTicks = () => {
      if (days >= 16) {
        if (isLgUp) return days / 2
        return days / 4
      }
      return days
    }

    const axisRomNumTicks = 6
    const axisColNumTicks = getAxisColNumTicks()

    const gridRowNumTicks = axisRomNumTicks
    const gridColNumTicks = isLgUp ? days : days / 2

    return (
      <div className="relative">
        <svg width={width} height={height}>
          <LinearGradient id={backgroundGradientId} from={background} to={background2} />
          <LinearGradient
            id={accentGradientId}
            from={curveColor}
            to={curveColor}
            fromOpacity={0.2}
            toOpacity={0.1}
          />
          <rect
            x={padding.left + margin.left}
            y={padding.left + margin.top}
            width={graphWidth}
            height={graphHeight}
            fill={getUrl(backgroundGradientId)}
          />
          <GridRows
            scale={studentCountValueScale}
            left={margin.left + padding.left}
            width={graphWidth}
            strokeDasharray="5"
            stroke={gridStorkeColor}
            numTicks={gridRowNumTicks}
          />
          <GridColumns
            scale={dateScale}
            top={margin.top + padding.top}
            height={graphHeight}
            strokeDasharray="5"
            stroke={gridStorkeColor}
            numTicks={gridColNumTicks}
          />
          {/* <clipPath id={clipPathId}>
            <rect x={0} y={0} width={0} height={innerHeight} />
          </clipPath> */}
          <LinePath<StudentGraphDataPoint>
            data={dataPoints}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => studentCountValueScale(getStudentCountValue(d)) ?? 0}
            strokeWidth={2}
            stroke={curveColor}
            curve={curveLinear}
            // clipPath={getUrl(clipPathId)}
          />
          <AreaClosed<StudentGraphDataPoint>
            data={dataPoints}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => studentCountValueScale(getStudentCountValue(d)) ?? 0}
            yScale={studentCountValueScale}
            fill={getUrl(accentGradientId)}
            stroke="transparent"
            curve={curveLinear}
            // clipPath={getUrl(clipPathId)}
          />
          <Bar
            x={margin.left + padding.left}
            y={margin.top + padding.top}
            width={graphWidth}
            height={graphHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          <Group>
            {dataPoints.map((data) => (
              <g
                key={data.date}
                className="cursor-pointer group"
                // clipPath={getUrl(clipPathId)}
              >
                <circle
                  r={3}
                  cx={dateScale(getDate(data))}
                  cy={studentCountValueScale(getStudentCountValue(data))}
                  className="fill-white stroke-yellow-400 stroke-2"
                />
                <text
                  textAnchor="middle"
                  x={dateScale(getDate(data))}
                  y={studentCountValueScale(getStudentCountValue(data) + 5)}
                  className={cn(
                    'fill-white text-xs text-center w-[20px] transition-all',
                    'group-hover:text-base'
                  )}
                >
                  {getStudentCountValue(data)}
                </text>
              </g>
            ))}
          </Group>
          <Axis
            top={innerHeight - MINIMUM_PADDING - 5}
            axisClassName="select-none"
            orientation="bottom"
            scale={dateScale}
            numTicks={axisColNumTicks}
            tickFormat={(data) => formatDateString(data as Date)}
            stroke="transparent"
            hideTicks
            tickLabelProps={tickLabelProps}
          />
          <Axis
            top={0}
            axisClassName="select-none"
            left={margin.left + padding.left + 3}
            orientation="left"
            scale={studentCountValueScale}
            numTicks={axisRomNumTicks}
            stroke="transparent"
            hideTicks
            tickLabelProps={{ ...tickLabelProps, textAnchor: 'end' }}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top + padding.top }}
                to={{ x: tooltipLeft, y: graphHeight + margin.top + padding.top }}
                stroke={guideLineColor}
                strokeWidth={2}
                className="opacity-50"
                pointerEvents="none"
                strokeDasharray="5"
              />
            </g>
          )}
          {selectedDataPointDate && (
            <g>
              <Line
                from={{
                  x: dateScale(new Date(selectedDataPointDate)),
                  y: margin.top + padding.top,
                }}
                to={{
                  x: dateScale(new Date(selectedDataPointDate)),
                  y: graphHeight + margin.top + padding.top,
                }}
                stroke={guideLineColor}
                strokeWidth={1}
                pointerEvents="none"
              />
            </g>
          )}
        </svg>
        {selectedDataPointDate && (
          <div
            style={{
              left: dateScale(new Date(selectedDataPointDate)),
              top: margin.top + padding.top,
            }}
            className={cn(
              'text-white text-xs font-semibold text-center absolute py-0.5 px-2 rounded-md bg-blue-600 select-none -translate-x-1/2'
            )}
          >
            วันนี้
          </div>
        )}
      </div>
    )
  }
)
