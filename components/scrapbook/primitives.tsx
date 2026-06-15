'use client'

import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const paperSpring = { type: 'spring' as const, stiffness: 100, damping: 14, mass: 1.1 }

type PaperProps = {
  children: ReactNode
  className?: string
  rotate?: number
  style?: CSSProperties
  /** lift + straighten slightly on hover, like picking up a corner */
  interactive?: boolean
  delay?: number
}

/**
 * A single physical sheet. Lands with a heavy spring, tilts when idle,
 * and lifts a corner on hover.
 */
export function Paper({
  children,
  className,
  rotate = 0,
  style,
  interactive = true,
  delay = 0,
}: PaperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: rotate + (rotate >= 0 ? 8 : -8) }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...paperSpring, delay }}
      whileHover={
        interactive
          ? { rotate: rotate * 0.3, scale: 1.02, y: -6, transition: { duration: 0.25 } }
          : undefined
      }
      style={style}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}

/** A strip of semi-transparent tape. position via className (top/left/etc). */
export function Tape({
  className,
  rotate = 0,
  style,
}: {
  className?: string
  rotate?: number
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden
      className={cn('tape', className)}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

/** A round push pin. */
export function Pin({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return <span aria-hidden className={cn('pin', className)} style={style} />
}

/** A small handwritten note in the margins, draggable for that "loose paper" feel. */
export function StickyNote({
  children,
  className,
  rotate = -3,
  style,
}: {
  children: ReactNode
  className?: string
  rotate?: number
  style?: CSSProperties
}) {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.18}
      whileDrag={{ scale: 1.06, rotate: 0, zIndex: 50, cursor: 'grabbing' }}
      initial={{ rotate }}
      whileHover={{ scale: 1.04 }}
      style={style}
      className={cn(
        'font-handwritten text-ink select-none cursor-grab leading-none',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

/** A loosely drawn red marker circle (SVG) to scribble around things. */
export function MarkerCircle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 120"
      className={cn('pointer-events-none absolute', className)}
      fill="none"
    >
      <path
        d="M101 8C61 4 24 18 14 47c-11 30 9 58 50 66 44 9 99 1 117-26 16-25 1-58-38-71C121 6 88 5 66 11"
        stroke="var(--marker)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}

/** A hand-drawn arrow pointing in a direction. */
export function MarkerArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 80"
      className={cn('pointer-events-none', className)}
      fill="none"
    >
      <path
        d="M8 12c22 6 50 26 60 54M68 66l4-22M68 66l-22 2"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  )
}

/** A small paperclip drawn in SVG to clip photos together. */
export function Paperclip({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 90"
      className={cn('pointer-events-none', className)}
      fill="none"
    >
      <path
        d="M12 78V20a10 10 0 0 1 20 0v54a16 16 0 0 1-32 0V30"
        stroke="oklch(0.55 0.02 250)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
