import { formatAsBaht } from '@luminate/utils'

export interface CostBreakdown {
  title: string
  price: number | null | undefined
}

export const CostBreakdown: React.FC<{ cost: CostBreakdown }> = ({ cost }) => {
  const isNegative = typeof cost.price === 'number' && cost.price < 0
  return (
    <div className="flex flex-row justify-between items-center text-white">
      <span>{cost.title}</span>
      <span className={isNegative ? 'text-red-400' : ''}>
        {typeof cost.price !== 'number' ? '-' : formatAsBaht(cost.price)}
      </span>
    </div>
  )
}
