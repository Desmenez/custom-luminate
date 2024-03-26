import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

import { WheelControls } from '@app/utils/keen-wheel-controls'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderInstance, TrackSlidesConfigOption, useKeenSlider } from 'keen-slider/react'

import { screens } from '@luminate/tailwindcss'
import { FontAwesomeIcon } from '@luminate/ui'

interface CourseCardSliderProps {
  children: ReactNode
  padded?: boolean
}

export function CourseCardSlider({ children, padded = false }: CourseCardSliderProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [isDragging, setDragging] = useState(false)

  function updateArrowsVisibility(instance: KeenSliderInstance) {
    const index = instance.track.details.rel
    setShowLeftArrow(index > instance.track.details.minIdx)
    setShowRightArrow(index < instance.track.details.maxIdx)
  }

  const getSlidesConfig = useMemo(() => {
    function getSlidesConfig(sliderSize: number, slides: HTMLElement[]): TrackSlidesConfigOption {
      const isMobile = window.matchMedia(`(max-width: ${screens.data.md})`).matches
      const paddingPx = padded ? (isMobile ? 16 : 56) : 0

      const config: { origin: number; size: number; spacing: number }[] = []
      const spacing = 16 / sliderSize
      const padding = paddingPx / sliderSize
      let length = padding * 2
      for (const slide of slides) {
        const tmp = slide.getBoundingClientRect()
        const size = tmp.width / sliderSize
        config.push({
          size,
          spacing,
          origin: padding,
        })
        length += size
      }
      length += spacing * (slides.length - 1)

      let checkedLength = 0
      for (const entry of config) {
        const space = length - checkedLength
        checkedLength += (entry.size as number) + spacing
        if (space >= 1) continue
        entry.origin += 1 - space - (length > 1 ? 0 : 1 - length)
      }

      return config
    }
    getSlidesConfig.perView = 'auto'
    return getSlidesConfig
  }, [padded])

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: getSlidesConfig,
      created: updateArrowsVisibility,
      updated: updateArrowsVisibility,
      slideChanged: updateArrowsVisibility,
      selector: (node) => node.childNodes,
      dragStarted() {
        setDragging(true)
      },
      dragEnded() {
        setDragging(false)
      },
    },
    [WheelControls]
  )
  const next = () => {
    instanceRef.current?.next()
  }
  const prev = () => {
    instanceRef.current?.prev()
  }
  return (
    <SliderContext.Provider value={{ isDragging }}>
      <div className="relative">
        <div
          data-show={showLeftArrow}
          className="data-[show=true]:animate-in data-[show=false]:animate-out data-[show=true]:fade-in data-[show=false]:fade-out fill-mode-forwards duration-500 absolute left-0 inset-y-0 w-[100px] bg-gradient-to-r from-gray-900 to-gray-900/0 pointer-events-none z-10"
        />
        <div
          data-show={showRightArrow}
          className="data-[show=true]:animate-in data-[show=false]:animate-out data-[show=true]:fade-in data-[show=false]:fade-out fill-mode-forwards duration-500 absolute right-0 inset-y-0 w-[100px] bg-gradient-to-l from-gray-900 to-gray-900/0 pointer-events-none z-10"
        />
        <button
          type="button"
          data-show={showLeftArrow}
          className="absolute left-0 inset-y-0 px-4 z-20 data-[show=false]:invisible"
          onClick={prev}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 " />
        </button>
        <button
          type="button"
          data-show={showRightArrow}
          className="absolute right-0 inset-y-0 px-4 z-20 data-[show=false]:invisible"
          onClick={next}
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 " />
        </button>
        <div className="keen-slider" ref={sliderRef}>
          {children}
        </div>
      </div>
    </SliderContext.Provider>
  )
}

const SliderContext = createContext({ isDragging: false })
export const useSliderContext = () => useContext(SliderContext)
