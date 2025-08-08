import { type HTMLAttributes, type ReactNode } from 'react'

export interface IconBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
}

export function IconBadge({ icon, className = '', children, ...props }: IconBadgeProps) {
  return (
    <div className={`badge ${className}`.trim()} {...props}>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </div>
  )
}

export default IconBadge


