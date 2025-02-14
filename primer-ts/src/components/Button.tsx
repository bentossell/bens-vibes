import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-hidden',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(--spacing(1)-1px)] px-[calc(--spacing(4)-1px)] text-base font-semibold tracking-tight focus:outline-hidden',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 'bg-[#737ffc] text-white hover:bg-[#737ffc]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#737ffc] active:bg-[#737ffc]/80 active:text-white/80 disabled:opacity-30 disabled:hover:bg-[#737ffc]',
    white:
      'bg-white text-[#737ffc] hover:text-[#737ffc]/90 focus-visible:text-[#737ffc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-[#737ffc]/10 active:text-[#737ffc]/80 disabled:opacity-40 disabled:hover:text-[#737ffc]',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 'border-[#737ffc]/30 text-[#737ffc] hover:border-[#737ffc]/40 hover:bg-[#737ffc]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#737ffc] active:text-[#737ffc]/70 disabled:opacity-40 disabled:hover:border-[#737ffc]/30 disabled:hover:bg-transparent',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
