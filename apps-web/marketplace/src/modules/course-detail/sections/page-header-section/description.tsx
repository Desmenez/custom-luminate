import { ReactNode } from 'react'

import { Dialog, DialogContent, DialogTrigger } from '@luminate/ui'

export interface DescriptionProps {
  className?: string
  name: string
  children?: ReactNode
}

export function Description({ className, name, children }: DescriptionProps) {
  return (
    <div className={className}>
      <p className="text-gray-400 text-xs lg:text-sm xl:text-base leading-normal line-clamp-3">
        {children}
      </p>
      <Dialog>
        <DialogTrigger className="text-blue-500 text-xs lg:text-sm hover:text-blue-400 hover:underline">
          ดูเพิ่มเติม
        </DialogTrigger>
        <DialogContent>
          <h2 className="text-center font-sans font-semibold text-xl text-gray-50 leading-normal">
            {name}
          </h2>
          <p className="text-gray-500 leading-normal">{children}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
