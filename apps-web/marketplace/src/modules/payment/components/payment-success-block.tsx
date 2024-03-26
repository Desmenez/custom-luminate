import { PropsWithChildren } from 'react'

import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'

import { FontAwesomeIcon } from '@luminate/ui'

export interface PaymentSuccessBlockTitleProps {
  icon: IconDefinition
  text: string
}

export function PaymentSuccessBlockTitle(props: PaymentSuccessBlockTitleProps) {
  return (
    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded-md h-fit w-fit text-gray-500">
      <span className="px-0.5 py-[3px]">
        <FontAwesomeIcon icon={props.icon} className="w-5 h-5" />
      </span>
      <span className="font-sans font-semibold text-sm leading-normal translate-y-[-0.5px]">
        {props.text}
      </span>
    </div>
  )
}

export interface PaymentSuccessBlockProps {
  title?:
    | {
        icon: IconDefinition
        text: string
      }
    | undefined
}

export const PaymentSuccessBlock = (props: PropsWithChildren<PaymentSuccessBlockProps>) => {
  return (
    <div className="whitespace-pre-line bg-gray-900 border rounded-lg border-gray-700 p-4 leading-6 gap-y-2 gap-x-1 flex flex-col">
      {props.title && <PaymentSuccessBlockTitle icon={props.title.icon} text={props.title.text} />}
      {props.children}
    </div>
  )
}
