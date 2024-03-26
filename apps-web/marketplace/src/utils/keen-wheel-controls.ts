import { KeenSliderPlugin } from 'keen-slider'

export const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>
  let position: {
    x: number
    y: number
  }
  let wheelActive: boolean
  let preventDefault = false

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    )
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, 'ksDragStart')
  }

  function wheel(e: WheelEvent) {
    dispatch(e, 'ksDrag')
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, 'ksDragEnd')
  }

  function eventWheel(e: WheelEvent) {
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
      if (slider.track.details.length > 0) {
        preventDefault = true
      }
    }
    if (preventDefault) {
      e.preventDefault()
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on('dragEnded', () => {
    preventDefault = false
  })

  let isListening = false
  function setListening(listening: boolean) {
    if (listening === isListening) return
    isListening = listening
    if (listening) {
      slider.container.addEventListener('wheel', eventWheel, {
        passive: false,
      })
    } else {
      slider.container.removeEventListener('wheel', eventWheel)
    }
  }

  slider.on('created', () => {
    setListening(slider.options.drag ?? false)
  })

  slider.on('optionsChanged', () => {
    setListening(slider.options.drag ?? false)
  })
}
