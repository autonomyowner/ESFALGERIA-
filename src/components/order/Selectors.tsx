import { type HTMLAttributes } from 'react'
import { type Platform, type DeliveryMethod, platformLabel, deliveryLabel } from '../../data/prices'

export interface SelectorsProps extends HTMLAttributes<HTMLDivElement> {
  platform: Platform
  delivery: DeliveryMethod
  onPlatformChange: (platform: Platform) => void
  onDeliveryChange: (delivery: DeliveryMethod) => void
}

export default function Selectors({ platform, delivery, onPlatformChange, onDeliveryChange, className = '', ...props }: SelectorsProps) {
  const platforms: Platform[] = ['ps', 'xbox', 'pc']
  const deliveries: DeliveryMethod[] = ['comfort', 'auction']

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`.trim()} {...props}>
      <fieldset>
        <legend className="text-sm text-slate-300 mb-2">المنصة</legend>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <button
              key={p}
              type="button"
              className={`btn ${platform === p ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => onPlatformChange(p)}
              aria-pressed={platform === p}
            >
              {platformLabel[p]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm text-slate-300 mb-2">طريقة التسليم</legend>
        <div className="flex flex-wrap gap-2">
          {deliveries.map((d) => (
            <button
              key={d}
              type="button"
              className={`btn ${delivery === d ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => onDeliveryChange(d)}
              aria-pressed={delivery === d}
            >
              {deliveryLabel[d]}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}


