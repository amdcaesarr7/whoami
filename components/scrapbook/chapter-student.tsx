'use client'

import { Paper, Pin, StickyNote } from './primitives'

export function ChapterStudent() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <Paper rotate={-1.5} className="relative mx-auto max-w-2xl">
        {/* bookmark ribbon */}
        <div
          aria-hidden
          className="absolute -top-2 right-10 z-20 h-24 w-7"
          style={{
            background: 'oklch(0.55 0.18 25)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)',
            boxShadow: '1px 2px 4px oklch(0 0 0 / 0.3)',
          }}
        />

        <div className="lined-paper relative overflow-hidden rounded-[2px] px-8 py-10 pl-14 sm:px-12 sm:pl-16">
          <p className="font-typewriter text-ink/50 text-xs tracking-[0.3em]">
            CHAPTER 01
          </p>
          <h2 className="font-typewriter text-ink mt-1 text-3xl sm:text-4xl">
            The Student
          </h2>

          <p className="font-body text-ink mt-6 text-[15px] leading-8">
            Before the screens and the soldering irons, there were{' '}
            <span className="marker-hl">overflowing notebooks</span> and a
            stubborn habit of asking <em>why</em> one too many times. I learned
            that curiosity is just{' '}
            <span className="marker-hl">a question that refuses to sit still.</span>
          </p>

          <ul className="font-body text-ink mt-6 space-y-2 text-[15px] leading-7">
            <li className="flex gap-3">
              <span aria-hidden className="text-marker">✦</span>
              Filled margins with doodles instead of dates.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-marker">✦</span>
              Discovered that breaking things teaches more than memorizing them.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-marker">✦</span>
              Kept every <span className="marker-hl">half-finished idea</span>.
            </li>
          </ul>

          {/* margin doodle */}
          <svg
            aria-hidden
            viewBox="0 0 80 80"
            className="absolute bottom-6 right-6 h-20 w-20 opacity-50"
            fill="none"
          >
            <path
              d="M10 60c8-30 22-44 30-44s10 18 4 30-2 22 8 18"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="58" cy="20" r="6" stroke="var(--ink)" strokeWidth="2" />
          </svg>
        </div>

        {/* old exam fragment overlapping */}
        <div
          className="paper-hard absolute -bottom-10 -left-6 hidden w-44 -rotate-6 p-3 sm:block"
          style={{ background: 'oklch(0.86 0.03 80)', mixBlendMode: 'multiply' }}
        >
          <Pin className="left-1/2 top-1 -translate-x-1/2" />
          <p className="font-mono text-ink/60 text-[9px] leading-tight">
            FINAL EXAM · Q4
            <br />
            ___________________
            <br />
            answer: &quot;it depends&quot;
            <br />
            grade: <span className="text-marker">B+ (see me)</span>
          </p>
        </div>
      </Paper>

      <StickyNote
        rotate={5}
        className="text-ink mx-auto mt-16 max-w-[200px] text-center text-3xl sm:ml-auto sm:mr-10"
      >
        &quot;the good notes were always in the margins&quot;
      </StickyNote>
    </section>
  )
}
