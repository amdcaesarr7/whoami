'use client'

import { Paper, StickyNote } from './primitives'

export function BlankPage() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24">
      <p className="font-typewriter text-ink/40 mb-8 text-xs tracking-[0.3em]">
        CHAPTER 05
      </p>

      <Paper rotate={-1} className="relative w-full max-w-md">
        <div className="torn-bottom bg-paper paper-soft min-h-[420px] rounded-sm px-8 py-10">
          <p className="font-typewriter text-ink text-lg">
            What&apos;s next?
            <span className="cursor-blink ml-0.5">|</span>
          </p>
          {/* vast white space, intentionally empty */}
        </div>
      </Paper>

      <StickyNote rotate={2} className="text-ink/70 mt-10 text-3xl">
        still figuring it out.
      </StickyNote>
    </section>
  )
}
