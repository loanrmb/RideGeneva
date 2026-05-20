import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  radius?: number
  gold?: boolean
  hover?: boolean
}

export default function GlassCard({
  children,
  className,
  radius = 24,
  gold = false,
  hover = false,
  style,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        gold ? 'glass-gold' : 'glass',
        hover && 'glass-hover transition-shadow duration-300',
        className
      )}
      style={{ borderRadius: radius, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
