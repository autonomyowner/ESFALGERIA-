import { type HTMLAttributes } from 'react'

export interface StepListProps extends HTMLAttributes<HTMLOListElement> {
  steps: string[]
}

export default function StepList({ steps, className = '', ...props }: StepListProps) {
  return (
    <ol className={`grid gap-3 ${className}`.trim()} {...props}>
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 font-bold border border-yellow-500/40">
            {index + 1}
          </span>
          <p className="text-slate-200">{step}</p>
        </li>
      ))}
    </ol>
  )
}


