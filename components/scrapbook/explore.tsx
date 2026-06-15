'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { motion, useScroll, useSpring, useInView } from 'motion/react'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Exploration context — tracks which "fragments" have been found     */
/* ------------------------------------------------------------------ */

type ExploreState = {
  total: number
  found: string[]
  discover: (id: string) => void
}

const ExploreContext = createContext<ExploreState | null>(null)

export function useExplore() {
  const ctx = useContext(ExploreContext)
  if (!ctx) throw new Error('useExplore must be used within <ExploreProvider>')
  return ctx
}

export function ExploreProvider({
  total,
  children,
}: {
  total: number
  children: ReactNode
}) {
  const [found, setFound] = useState<string[]>([])

  const discover = useCallback((id: string) => {
    setFound((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  const value = useMemo(
    () => ({ total, found, discover }),
    [total, found, discover],
  )

  return (
    <ExploreContext.Provider value={value}>{children}</ExploreContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Scene — a cinematic reveal wrapper that also registers a discovery */
/* ------------------------------------------------------------------ */

export function Scene({
  id,
  children,
  className,
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const { discover } = useExplore()

  useEffect(() => {
    if (inView) discover(id)
  }, [inView, id, discover])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, scale: 0.97, filter: 'blur(6px)' }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          : undefined
      }
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  ExploreHud — fixed progress rail + "fragments recovered" counter   */
/* ------------------------------------------------------------------ */

export function ExploreHud({ labels }: { labels: string[] }) {
  const { total, found } = useExplore()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  })

  const count = Math.min(found.length, total)

  return (
    <>
      {/* top scrub line — like a film reel timeline */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-1 bg-foreground/10">
        <motion.div
          style={{ scaleX, transformOrigin: '0% 50%' }}
          className="h-full bg-marker"
        />
      </div>

      {/* counter chip */}
      <div className="pointer-events-none fixed right-3 top-4 z-[80] sm:right-5">
        <div className="flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marker/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-marker" />
          </span>
          <span className="font-mono text-[11px] tracking-widest text-foreground/80">
            {count.toString().padStart(2, '0')} / {total.toString().padStart(2, '0')} FRAGMENTS
          </span>
        </div>
      </div>


    </>
  )
}

/* ------------------------------------------------------------------ */
/*  FoundStamp — a rubber-stamp badge that thuds in when discovered    */
/* ------------------------------------------------------------------ */

export function FoundStamp({
  label = 'RECOVERED',
  className,
}: {
  label?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className={cn('pointer-events-none', className)}>
      <motion.div
        initial={{ opacity: 0, scale: 1.8, rotate: -18 }}
        animate={inView ? { opacity: 0.85, scale: 1, rotate: -12 } : undefined}
        transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.3 }}
        className="found-stamp inline-block px-3 py-1 text-xs"
      >
        {label}
      </motion.div>
    </div>
  )
}
