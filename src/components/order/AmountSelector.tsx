import { type HTMLAttributes } from 'react'

export interface AmountSelectorProps extends HTMLAttributes<HTMLDivElement> {
  amount: number
  onAmountChange: (amount: number) => void
}

const presets = [100_000, 250_000, 500_000, 1_000_000]

export default function AmountSelector({ amount, onAmountChange, className = '', ...props }: AmountSelectorProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onAmountChange(Number(event.target.value))
  }

  function handlePresetClick(value: number) {
    onAmountChange(value)
  }

  return (
    <div className={`space-y-3 ${className}`.trim()} {...props}>
      <label className="block text-sm text-slate-300">الكمية (بالـ 100K)</label>
      <input
        type="range"
        min={100_000}
        max={3_000_000}
        step={50_000}
        value={amount}
        onChange={handleChange}
        className="w-full accent-yellow-500"
        aria-label="محدد الكمية"
      />
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button key={p} type="button" className="btn btn-secondary" onClick={() => handlePresetClick(p)}>
            {p.toLocaleString('ar-DZ')}
          </button>
        ))}
      </div>
    </div>
  )
}


