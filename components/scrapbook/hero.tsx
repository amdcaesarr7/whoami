'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Paper, Tape, Pin, StickyNote, MarkerCircle, MarkerArrow } from './primitives'

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24">
      {/* faint coffee stain bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-2 h-56 w-56 rounded-full md:right-20"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, oklch(0.45 0.07 60 / 0.22), oklch(0.45 0.07 60 / 0.05) 55%, transparent 70%)',
          mixBlendMode: 'multiply',
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-typewriter text-ink mb-10 text-center text-5xl tracking-tight sm:text-7xl"
      >
        <span className="inline-block -rotate-2">WHO</span>{' '}
        <span className="inline-block rotate-1">AM</span>{' '}
        <span className="inline-block rotate-2">I?</span>
      </motion.h1>

      {/* The polaroid */}
      <Paper rotate={4} className="relative" delay={0.2}>
        <Tape rotate={-6} className="-top-4 left-1/2 z-20 -translate-x-1/2" />
        <MarkerCircle className="-left-8 -top-6 z-10 h-[150%] w-[125%]" />
        <div className="bg-paper paper-soft w-64 p-3 pb-14 sm:w-72">
          <div className="relative aspect-square w-full overflow-hidden bg-ink/10">
            <Image
              src="/images/polaroid-portrait.png"
              alt="A faded polaroid snapshot of me"
              fill
              priority
              className="object-cover saturate-[0.85]"
              sizes="288px"
            />
          </div>
          <p className="font-handwritten text-ink mt-3 text-center text-2xl leading-none">
            me, probably overthinking something
          </p>
        </div>
      </Paper>

      {/* torn ticket stub */}
      <Paper
        rotate={-8}
        delay={0.5}
        className="absolute right-6 top-28 hidden sm:block md:right-24"
      >
        <Pin className="left-1/2 top-1 z-20 -translate-x-1/2" />
        <div className="torn-bottom bg-paper-aged paper-hard w-36 px-3 py-3 pt-5">
          <p className="font-typewriter text-ink/70 text-[10px] tracking-widest">
            ADMIT ONE
          </p>
          <p className="font-typewriter text-ink mt-1 text-sm leading-tight">
            A LIFE IN
            <br />
            FRAGMENTS
          </p>
          <div className="border-ink/20 mt-2 border-t border-dashed pt-1">
            <p className="font-mono text-ink/60 text-[9px]">NO · 00417</p>
          </div>
        </div>
      </Paper>

      {/* scribble sticky notes */}
      <StickyNote
        rotate={-6}
        className="text-ink/40 absolute left-4 top-40 hidden text-3xl md:block"
      >
        <span className="block">~~~~~~</span>
        <span className="block">~~~~</span>
      </StickyNote>

      {/* start here arrow */}
      <div className="mt-14 flex flex-col items-center gap-1">
        <StickyNote rotate={-4} className="text-ink text-3xl">
          start here
        </StickyNote>
        <MarkerArrow className="h-12 w-16 rotate-6" />
        <motion.span
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="font-typewriter text-ink/50 text-xs tracking-widest"
        >
          SCROLL
        </motion.span>
      </div>
    </section>
  )
}
