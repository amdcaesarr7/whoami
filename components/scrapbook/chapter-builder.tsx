'use client'

import Image from 'next/image'
import { Paper, Tape, Pin, StickyNote } from './primitives'

export function ChapterBuilder() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-typewriter text-ink/50 text-xs tracking-[0.3em]">
          CHAPTER 02
        </p>
        <h2 className="font-typewriter text-ink mt-1 inline-block -rotate-1 text-3xl sm:text-4xl">
          The Builder
        </h2>
      </div>

      {/* cluttered desk: overlapping scatter */}
      <div className="relative grid gap-10 sm:grid-cols-2">
        {/* project photo */}
        <Paper rotate={-3} className="relative justify-self-center">
          <Tape rotate={8} className="-right-3 -top-3 z-20 h-7 w-20" />
          <div className="bg-paper paper-soft w-60 p-2 pb-8 sm:w-64">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/10">
              <Image
                src="/images/project-desk.png"
                alt="My cluttered build desk with a laptop and parts"
                fill
                className="object-cover saturate-[0.85]"
                sizes="256px"
              />
            </div>
            <p className="font-handwritten text-ink mt-2 text-center text-2xl leading-none">
              shipping at 2am again
            </p>
          </div>
        </Paper>

        {/* receipt with code */}
        <Paper rotate={2} className="relative justify-self-center">
          <div className="receipt-paper w-52 px-4 py-5">
            <p className="text-center text-[10px] tracking-widest text-ink/60">
              * * * BUILD LOG * * *
            </p>
            <pre className="mt-3 whitespace-pre-wrap text-[10px] leading-5 text-ink">
{`function ship(idea) {
  while (!done) {
    coffee++;
    refactor();
  }
  return joy;
}`}
            </pre>
            <div className="my-3 border-t border-dashed border-ink/30" />
            <p className="text-[10px] leading-5 text-ink/70">
              ITEM ........ a thing
              <br />
              QTY ......... too many
              <br />
              TOTAL ...... worth it
            </p>
            <p className="mt-3 text-center text-[10px] text-ink/50">
              ~ thank you ~
            </p>
          </div>
        </Paper>

        {/* napkin wireframe */}
        <Paper
          rotate={-2}
          className="relative justify-self-center sm:col-span-2 sm:justify-self-start sm:pl-20"
        >
          <Pin className="left-6 top-1 z-20" />
          <div
            className="paper-soft w-64 rounded-sm p-4"
            style={{ background: 'oklch(0.95 0.01 90 / 0.92)' }}
          >
            <svg viewBox="0 0 220 130" className="w-full" fill="none" aria-hidden>
              <rect
                x="8" y="8" width="204" height="114" rx="4"
                stroke="var(--ink)" strokeWidth="2" strokeDasharray="2 4" opacity="0.5"
              />
              <rect x="20" y="20" width="80" height="14" rx="2" stroke="var(--ink)" strokeWidth="2" opacity="0.5" />
              <rect x="20" y="46" width="180" height="40" rx="2" stroke="var(--ink)" strokeWidth="2" opacity="0.5" />
              <rect x="20" y="96" width="50" height="16" rx="8" stroke="var(--marker)" strokeWidth="2" />
              <path d="M120 96l30-26 30 26" stroke="var(--ink)" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            </svg>
            <p className="font-handwritten text-ink mt-1 text-center text-2xl leading-none">
              napkin sketch &gt; spec doc
            </p>
          </div>
        </Paper>
      </div>

      {/* connecting idea note with drawn arrow */}
      <div className="relative mt-10 flex justify-center">
        <StickyNote rotate={3} className="text-ink max-w-[220px] text-center text-3xl">
          if it builds, it&apos;s a feature.
          <br />
          if it breaks, it&apos;s a lesson.
        </StickyNote>
      </div>
    </section>
  )
}
