import { type HTMLAttributes } from 'react'

export interface RateRow {
  amount: string
  price: string
}

export interface RatesTableProps extends HTMLAttributes<HTMLTableElement> {
  rows: RateRow[]
}

export default function RatesTable({ rows, className = '', ...props }: RatesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full text-right text-slate-200 ${className}`.trim()} {...props}>
        <thead>
          <tr className="text-sm text-slate-400">
            <th className="py-3 px-3 font-semibold border-b border-slate-800">الكمية</th>
            <th className="py-3 px-3 font-semibold border-b border-slate-800">السعر</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-slate-900/30">
              <td className="py-3 px-3 border-b border-slate-800">{row.amount}</td>
              <td className="py-3 px-3 border-b border-slate-800">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


