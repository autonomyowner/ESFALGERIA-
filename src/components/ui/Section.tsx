import { type HTMLAttributes } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLElement> {}

export function Section({ className = '', ...props }: SectionProps) {
  return <section className={`section ${className}`.trim()} {...props} />
}

export default Section


