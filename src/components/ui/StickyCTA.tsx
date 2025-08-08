import { type HTMLAttributes } from 'react'

export interface StickyCTAProps extends HTMLAttributes<HTMLDivElement> {}

export function StickyCTA({ className = '', children, ...props }: StickyCTAProps) {
  return (
    <div className={`sticky-cta ${className}`.trim()} {...props}>
      <div className="container flex items-center justify-between gap-3">
        {children}
      </div>
    </div>
  )
}

export default StickyCTA


