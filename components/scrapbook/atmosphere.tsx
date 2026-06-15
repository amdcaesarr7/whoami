'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Cinematic ambient layer:
 *  - a warm lamp glow that lazily trails the cursor
 *  - slow-drifting dust motes caught in the light
 * Purely decorative; sits behind the paper content.
 */
export function Atmosphere() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [motes, setMotes] = useState<
    { left: string; size: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    // generate dust motes once on the client to avoid hydration mismatch
    setMotes(
      Array.from({ length: 16 }, () => ({
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
      })),
    )
  }, [])

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight * 0.3
    let cx = tx
    let cy = ty

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.style.setProperty('--lamp-x', `${cx}px`)
      el.style.setProperty('--lamp-y', `${cy}px`)
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} aria-hidden className="lamp-glow" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[6] overflow-hidden">
        {motes.map((m, i) => (
          <span
            key={i}
            className="dust absolute bottom-0 rounded-full bg-lamp/70"
            style={{
              left: m.left,
              width: m.size,
              height: m.size,
              animationDelay: `${m.delay}s`,
              animationDuration: `${m.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
