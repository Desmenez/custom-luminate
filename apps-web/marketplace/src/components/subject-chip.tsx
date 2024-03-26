import { useMemo } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import colorConvert from 'color-convert'

import { cn } from '@luminate/ui'

const subjectChip = cva('inline-block leading-normal', {
  variants: {
    size: {
      sm: 'px-3 py-[3px] text-xs rounded-lg',
      lg: 'px-4 py-2 text-base rounded-[16px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface SubjectChipProps extends VariantProps<typeof subjectChip> {
  className?: string
  name: string
  mainColor: string | null
}

export function SubjectChip(props: SubjectChipProps) {
  const name = props.name
  const mainColor = props.mainColor ?? '#5F1F7A'
  const className = props.className
  const size = props.size

  const colors = useMemo(() => {
    const [h, s, l] = colorConvert.hex.hsl(mainColor)
    const background = '#' + colorConvert.hsl.hex([h, s - 10, l + 35])
    const text = '#' + colorConvert.hsl.hex([h, s, l - 15])
    return { background, text }
  }, [mainColor])

  return (
    <span
      className={cn(subjectChip({ size }), className)}
      style={{ color: colors.text, backgroundColor: colors.background }}
    >
      {name}
    </span>
  )
}
