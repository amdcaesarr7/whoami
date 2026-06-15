'use client'

import Image from 'next/image'
import { Paper, Tape, Paperclip, StickyNote } from './primitives'

export function ChapterRepair() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-typewriter text-ink/50 text-xs tracking-[0.3em]">
          CHAPTER 03
        </p>
        <h2 className="font-typewriter text-ink mt-1 inline-block rotate-1 text-3xl sm:text-4xl">
          The Repair Guy
        </h2>
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* blueprint schematic */}
        <Paper rotate={-2} className="relative">
          <Tape rotate={-5} className="-left-2 -top-3 z-20" />
          <Tape rotate={5} className="-right-2 -top-3 z-20" />
          <div className="blueprint relative overflow-hidden rounded-sm p-6">
            <p className="font-mono text-[10px] tracking-widest opacity-80">
              FIG. 1 — TEARDOWN
            </p>
            <svg viewBox="0 0 240 160" className="mt-3 w-full" fill="none" aria-hidden>
              <rect x="60" y="14" width="120" height="132" rx="14" stroke="currentColor" strokeWidth="1.5" />
              <rect x="72" y="30" width="96" height="70" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              <circle cx="120" cy="124" r="9" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="180" y1="80" x2="206" y2="80" stroke="currentColor" strokeWidth="1" />
              <text x="6" y="54" fill="currentColor" fontSize="9" fontFamily="monospace">screen</text>
              <text x="186" y="74" fill="currentColor" fontSize="9" fontFamily="monospace">battery</text>
            </svg>
            <p className="font-mono mt-2 text-[10px] leading-4 opacity-70">
              torque: snug, not heroic · order: outside-in
            </p>

            {/* diagnostic sticker */}
            <span className="absolute bottom-3 right-3 rotate-6 rounded-sm bg-paper px-2 py-1 font-mono text-[8px] text-ink shadow">
              PASS ✓ QC-09
            </span>
          </div>
        </Paper>

        {/* before / after clipped photos */}
        <Paper rotate={2} className="relative mx-auto">
          <Paperclip className="absolute -top-6 left-10 z-30 h-16 w-8 rotate-6" />
          <div className="relative">
            <div className="bg-paper paper-soft w-56 -rotate-3 p-2 pb-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/10 grayscale">
                <Image
                  src="/images/repair-phone.png"
                  alt="A phone opened up on the repair mat, before fixing"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <p className="font-handwritten text-ink mt-1 text-center text-xl leading-none">
                before — totally dead
              </p>
            </div>
            <div className="bg-paper paper-soft absolute -bottom-10 left-16 w-48 rotate-3 p-2 pb-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/10">
                <Image
                  src="/images/repair-phone.png"
                  alt="The same phone reassembled and working"
                  fill
                  className="object-cover saturate-[0.9]"
                  sizes="192px"
                />
              </div>
              <p className="font-handwritten text-marker mt-1 text-center text-xl leading-none">
                after — alive!
              </p>
            </div>
          </div>
        </Paper>
      </div>

      <StickyNote
        rotate={-4}
        className="text-marker mt-24 max-w-[260px] text-3xl md:ml-10"
      >
        note: nothing is truly broken. it&apos;s just waiting for someone patient enough.
      </StickyNote>
    </section>
  )
}
