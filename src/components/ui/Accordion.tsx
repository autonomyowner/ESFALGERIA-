import { useId, useState, type HTMLAttributes, type ReactNode } from 'react'

export interface AccordionItemData {
  id?: string
  question: string
  answer: ReactNode
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItemData[]
}

export function Accordion({ items, className = '', ...props }: AccordionProps) {
  return (
    <div className={`divide-y divide-slate-800 ${className}`.trim()} {...props}>
      {items.map((item, index) => (
        <AccordionItem key={item.id ?? index} question={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  )
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  question: string
  children: ReactNode
}

export function AccordionItem({ question, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const baseId = useId()
  const buttonId = `${baseId}-trigger`
  const contentId = `${baseId}-content`

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="accordion-item">
      <button
        id={buttonId}
        className="accordion-trigger"
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span>{question}</span>
        <span className="text-slate-400" aria-hidden>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className="accordion-content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion


