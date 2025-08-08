import { type HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradientBorder?: boolean
}

export function Card({ gradientBorder = false, className = '', ...props }: CardProps) {
  const base = gradientBorder ? 'card card-gradient' : 'card'
  return <div className={`${base} ${className}`.trim()} {...props} />
}

export default Card


