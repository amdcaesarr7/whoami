'use client'

import { motion } from 'motion/react'
import { Paper, StickyNote } from './primitives'

export function BlankPage() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24">
      <p className="font-mono mb-8 text-xs tracking-[0.4em] text-foreground/40">
        CHAPTER 05 — WHAT&apos;S NEXT?
      </p>

      <Paper rotate={-1} className="relative w-full max-w-md">
        <div className="torn-bottom bg-paper paper-soft min-h-[360px] rounded-sm px-8 py-10">
          <p className="font-body text-ink/80 text-[15px] leading-8">
            No clue, honestly. And that&apos;s fine.
          </p>
          <p className="font-body text-ink/80 mt-3 text-[15px] leading-8">
            This page is unfinished on purpose —
          </p>
          <p className="font-typewriter text-ink mt-6 text-lg">
            still figuring it out
            <span className="cursor-blink ml-0.5">|</span>
          </p>
          {/* vast space left intentionally empty */}
        </div>
      </Paper>

      <StickyNote rotate={2} className="mt-10 text-3xl text-foreground/80">
        that&apos;s sort of the whole point.
      </StickyNote>

      {/* cinematic credits roll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-28 text-center"
      >
        <p className="font-mono text-[11px] tracking-[0.5em] text-foreground/40">
          — CREDITS —
        </p>
        <div className="mt-5 space-y-1.5 font-body text-sm text-foreground/60">
          <p>To Friends.</p>
          <p>To Family.</p>
          <p>To the inner Caesar.</p>
        </div>
        <p className="font-typewriter mt-8 text-2xl tracking-[0.3em] text-foreground/70">
          FIN.
        </p>
        <p className="font-mono mt-3 text-[10px] tracking-widest text-foreground/30">
          scroll on if you like digging through lost notes.
        </p>
      </motion.div>
    </section>
  )
}
