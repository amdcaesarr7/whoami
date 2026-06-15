'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Paper, Tape, Pin, StickyNote, MarkerCircle, MarkerArrow } from './primitives'

const intro = [
  "If you're here, you must've stumbled onto one of those random pages",
  'I threw online at 2AM and then totally abandoned.',
]

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24">
      {/* faint coffee ring, bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-2 h-48 w-48 rounded-full md:right-24"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, transparent 52%, oklch(0.35 0.06 60 / 0.4) 54%, oklch(0.35 0.06 60 / 0.4) 58%, transparent 60%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* tiny pre-title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-mono mb-6 text-[11px] uppercase tracking-[0.45em] text-foreground/45"
      >
        an unfinished archive
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-typewriter mb-2 text-center text-5xl tracking-tight text-foreground drop-shadow-[0_2px_12px_oklch(0_0_0/0.6)] sm:text-7xl"
      >
        <span className="inline-block -rotate-2">WHO</span>{' '}
        <span className="inline-block rotate-1">AM</span>{' '}
        <span className="inline-block rotate-2 text-marker">I?</span>
      </motion.h1>

      {/* typed intro lines */}
      <div className="mb-10 max-w-md text-center">
        {intro.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + i * 0.4 }}
            className="font-body text-sm leading-7 text-foreground/65"
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="font-handwritten mt-3 text-3xl text-lamp"
        >
          I&apos;m Caesar.
        </motion.p>
      </div>

      {/* The polaroid */}
      <Paper rotate={4} className="relative" delay={0.2}>
        <Tape rotate={-6} className="-top-4 left-1/2 z-20 -translate-x-1/2" />
        <MarkerCircle className="-left-8 -top-6 z-10 h-[150%] w-[125%]" />
        <div className="bg-paper paper-soft w-64 p-3 pb-14 sm:w-72">
          <div className="relative aspect-square w-full overflow-hidden bg-ink/10">
            <Image
              src="/images/polaroid-portrait.png"
              alt="A faded polaroid snapshot of Caesar"
              fill
              priority
              className="object-cover saturate-[0.85]"
              sizes="288px"
            />
          </div>
          <p className="font-handwritten text-ink mt-3 text-center text-2xl leading-none">
            the kid who takes stuff apart
          </p>
        </div>
      </Paper>

      {/* torn ticket stub */}
      <Paper
        rotate={-8}
        delay={0.5}
        className="absolute right-6 top-32 hidden sm:block md:right-24"
      >
        <Pin className="left-1/2 top-1 z-20 -translate-x-1/2" />
        <div className="torn-bottom bg-paper-aged paper-hard w-36 px-3 py-3 pt-5">
          <p className="font-typewriter text-ink/70 text-[10px] tracking-widest">
            Why it ws created? 
          </p>
          <p className="font-typewriter text-ink mt-1 text-sm leading-tight">
            idk
            <br />
            
          </p>
          <div className="border-ink/20 mt-2 border-t border-dashed pt-1">
            <p className="font-mono text-ink/60 text-[9px]">its a thing i love. hehe</p>
          </div>
        </div>
      </Paper>

      {/* society note, scribbled in the margin */}
      <StickyNote
        rotate={-5}
        className="absolute left-2 top-44 hidden max-w-[170px] text-2xl text-foreground/70 md:block"
      >
        Caesar is not here to impress anyone. society&apos;s not my target audience.
      </StickyNote>

      {/* begin exploring */}
      <div className="mt-14 flex flex-col items-center gap-1">
        <StickyNote rotate={-4} className="text-foreground text-3xl">
          start digging
        </StickyNote>
        <MarkerArrow className="h-12 w-16 rotate-6" />
        <motion.span
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-xs tracking-[0.4em] text-foreground/45"
        >
          Scroll &apos;ONLY I YOU REALLY WANT&apos;
        </motion.span>
      </div>
    </section>
  )
}
