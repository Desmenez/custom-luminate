import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon, Separator } from '@luminate/ui'
import { formatAsBaht } from '@luminate/utils'

import { CostBreakdown } from './checkout/cost-breakdown'

interface PaymentSuccessSummaryProps {
  costs: CostBreakdown[]
  totalPrice: number
}

const ticketCutoutBackground = `%3Csvg width='30' height='10' viewBox='0 0 30 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0V10H6C6 5.02944 10.0294 1 15 1C19.9706 1 24 5.02944 24 10H30V0Z' fill='%23052E16'/%3E%3C/svg%3E%0A`

export const PaymentSuccessSummary = (props: PaymentSuccessSummaryProps) => {
  return (
    <section className="relative">
      <div
        className="absolute inset-[10px] -z-10 rounded-t-[2px]"
        style={{
          boxShadow: '0 10px 15px 7px rgb(0 0 0 / 0.1), 0 4px 6px 6px rgb(0 0 0 / 0.1)',
        }}
      />
      <div className="w-full p-4 gap-y-4 flex flex-col items-center bg-gray-900 rounded-t-lg">
        <div className="w-[60px] h-[60px] bg-green-950 bg-opacity-80 rounded-full flex items-center justify-center">
          <FontAwesomeIcon className="text-green-400 w-[40px] h-[40px]" icon={faBadgeCheck} />
        </div>
        <h4 className="font-semibold text-xl">ชำระเงินสำเร็จ</h4>
        <Separator />
        <div className="w-full flex flex-col gap-2">
          {props.costs.map((cost, idx) => (
            <CostBreakdown key={idx} cost={cost} />
          ))}
        </div>
        <Separator />
      </div>
      <div className="bg-green-950 w-full p-4 flex flex-col gap-2">
        <div className="flex flex-row justify-between font-semibold">
          <div>ราคาสุทธิ</div>
          <div className="text-yellow-400">{formatAsBaht(props.totalPrice)}</div>
        </div>
        <div className="text-gray-500 text-xs">ราคารวมภาษีมูลค่าเพิ่ม (7%)</div>
      </div>
      {/* Ticket graphic */}
      <div className="relative grid grid-cols-[repeat(auto-fit,30px)] justify-center overflow-hidden">
        {/* Left fill */}
        <div className="absolute col-[1/2] w-[15px] h-full -translate-x-full bg-green-950" />
        {/* Middle cutouts */}
        <div
          className="col-span-full h-[10px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${ticketCutoutBackground}")`,
          }}
        />
        {/* Right fill */}
        <div className="absolute col-[-1/-1] w-[15px] h-full bg-green-950" />
      </div>
    </section>
  )
}
