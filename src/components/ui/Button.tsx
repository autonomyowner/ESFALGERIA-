import { type ButtonHTMLAttributes, forwardRef, isValidElement, cloneElement, type ReactElement } from 'react'

type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isLoading?: boolean
  asChild?: boolean
}

const variantToClassName: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', isLoading = false, asChild = false, className = '', children, disabled, ...props },
  ref,
) {
  const baseClassName = `${variantToClassName[variant]} ${className}`.trim()

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<any>
    const childClassName = [baseClassName, child.props.className].filter(Boolean).join(' ')
    return cloneElement(child, {
      className: childClassName,
      'aria-busy': isLoading || undefined,
    })
  }

  return (
    <button
      ref={ref}
      className={baseClassName}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button


