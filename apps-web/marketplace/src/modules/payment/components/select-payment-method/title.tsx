import { ReactElement } from 'react'

export interface PaymentMethodTitleProps {
  title: string
  icon: ReactElement
}

export const PaymentMethodTitle: React.FC<PaymentMethodTitleProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-row items-center gap-x-4 gap-y-2 flex-wrap flex-1">
      <h3 className="whitespace-nowrap">{title}</h3>
      {icon}
    </div>
  )
}
