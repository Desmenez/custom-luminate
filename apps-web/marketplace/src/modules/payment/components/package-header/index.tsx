import { Fragment, useMemo } from 'react'

import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

import { Button, FontAwesomeIcon } from '@luminate/ui'

import { PackageStepItem } from './step'

const steps = [
  { name: 'PACKAGE_SELECTION', label: 'เลือกแพ็คเกจ' },
  { name: 'PAYMENT_METHOD', label: 'ข้อมูลการชำระเงิน' },
  { name: 'SUCCESS', label: 'เสร็จสิ้น' },
] as const
type PackageStep = (typeof steps)[number]['name']

interface PackageStepsProps {
  isPaymentSuccess?: boolean
  liveCourseId: string
  activeStep: PackageStep
}

export const PackageHeader = ({
  liveCourseId,
  activeStep,
  isPaymentSuccess = false,
}: PackageStepsProps) => {
  const activeStepIndex = steps.findIndex((step) => step.name === activeStep)

  const backToLiveCourseLink = useMemo(() => {
    if (isPaymentSuccess) {
      return (
        <Button
          variant="default"
          className="w-full hidden lg:inline-flex lg:w-[220px] self-end"
          asChild
        >
          <Link passHref href={`/course/${liveCourseId}`}>
            กลับไปหน้าคอร์สเรียน
          </Link>
        </Button>
      )
    }
    return (
      <Link
        className="text-white text-sm hidden lg:block"
        passHref
        href={`/course/${liveCourseId}`}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3 mr-2 inline-block align-middle" />
        <span className="w-fit">กลับไปหน้าคอร์สเรียน</span>
      </Link>
    )
  }, [liveCourseId, isPaymentSuccess])

  return (
    <section className="bg-gray-950 lg:bg-transparent py-3 lg:py-0 lg:pt-14">
      <div className="container flex flex-col gap-6">
        {backToLiveCourseLink}
        <div className="flex flex-row justify-between items-center">
          {/* Left-hand sisde */}
          <div className="flex flex-row flex-wrap gap-y-2 gap-x-6 lg:gap-x-14 items-center">
            <h2 className="font-semibold text-4xl w-fit hidden lg:block">คำสั่งซื้อ</h2>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              {steps.map((step, index) => (
                <Fragment key={index}>
                  <PackageStepItem
                    {...step}
                    type={
                      index === activeStepIndex
                        ? 'active'
                        : index < activeStepIndex
                        ? 'previous'
                        : 'disabled'
                    }
                  />
                  {index !== steps.length - 1 && (
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-gray-500 h-3 w-3 hidden lg:block"
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Right-hand side */}
          <div className="text-base font-normal whitespace-nowrap">
            ขั้นตอน{' '}
            <span className="font-semibold text-yellow-400 text-xl">{activeStepIndex + 1}</span> /
            {steps.length}
          </div>
        </div>
      </div>
    </section>
  )
}
