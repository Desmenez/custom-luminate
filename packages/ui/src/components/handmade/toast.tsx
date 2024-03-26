import toast, { Toaster as OriginalToaster, ToastBar } from 'react-hot-toast'

import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faXmark,
} from '@fortawesome/pro-solid-svg-icons'

import { cn } from '../../lib/utils'
import { FontAwesomeIcon } from './font-awesome-icon'

export { toast } from 'react-hot-toast'

export const Toaster = () => {
  const baseContainerClassName = cn(
    '!bg-gray-50 !text-gray-950 !min-w-[200px] !w-fit !max-w-[600px] !shadow-lg !transition-colors !duration-300'
  )
  const baseIconClassName = cn('w-4 h-4 shrink-0 animate-in zoom-in duration-300 ease-in-out')

  return (
    <OriginalToaster
      position="top-center"
      toastOptions={{
        // Toaster use goober to style the toast by default, and goober was injected AFTER tailwind
        // Such that goober has always higher priority than tailwind
        // For workaround, we can use !important to override the style
        className: baseContainerClassName,
        error: {
          className: cn(baseContainerClassName, '!bg-red-400 !text-red-950'),
          icon: (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={cn(baseIconClassName, '!text-red-950')}
            />
          ),
        },
        success: {
          className: cn(baseContainerClassName, '!bg-green-400 !text-green-950'),
          icon: (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={cn(baseIconClassName, '!text-green-950')}
            />
          ),
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {t.type !== 'blank' && icon}
              {t.type === 'blank' && (
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={cn(baseIconClassName, '!text-gray-950')}
                />
              )}
              <div className="[&>*]:!justify-start w-full">{message}</div>
              {t.type !== 'loading' && (
                <div
                  role="button"
                  className={cn(
                    'p-1 rounded-full bg-transparent transition-colors hover:bg-gray-50/20 cursor-pointer',
                    t.type === 'blank' && 'hover:bg-gray-400/20'
                  )}
                  onClick={() => toast.dismiss(t.id)}
                >
                  <FontAwesomeIcon icon={faXmark} className="w-3 h-3 shrink-0" />
                </div>
              )}
            </>
          )}
        </ToastBar>
      )}
    </OriginalToaster>
  )
}
