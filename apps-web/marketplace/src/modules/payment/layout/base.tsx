import { cn } from '@luminate/ui'

export interface PaymentLayoutProps {
  className?: string
  left: React.ReactNode
  right: React.ReactNode
}

export function PaymentLayout(props: PaymentLayoutProps) {
  return (
    <div
      className={cn(
        'container relative flex flex-col gap-4 lg:flex-row lg:items-start',
        props.className
      )}
    >
      <section className="w-full lg:w-0 lg:flex-1">{props.left}</section>
      <section className="w-full top-0 h-fit lg:w-[300px] xl:w-[411px] lg:sticky lg:top-[calc(16px+var(--navbar))]">
        {props.right}
      </section>
    </div>
  )
}
