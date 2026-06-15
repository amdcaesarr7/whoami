'use client'

import { Paper, Pin, StickyNote } from './primitives'
import { FoundStamp } from './explore'

const tabs = [
  'a tutorial I\u2019ll half-follow',
  'a forum w/ my dumb question',
  'a project that won\u2019t get finished',
  'localhost:3000',
  'localhost:8080',
  'terminal',
]

export function ChapterStudent() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-mono text-xs tracking-[0.4em] text-foreground/40">
          CHAPTER 01
        </p>
        <h2 className="font-typewriter mt-1 inline-block -rotate-1 text-3xl text-foreground sm:text-4xl">
          The Student
        </h2>
      </div>

      <Paper rotate={-1.5} className="relative mx-auto max-w-2xl">
        {/* bookmark ribbon */}
        <div
          aria-hidden
          className="absolute -top-2 right-10 z-20 h-24 w-7"
          style={{
            background: 'oklch(0.57 0.21 25)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)',
            boxShadow: '1px 2px 4px oklch(0 0 0 / 0.3)',
          }}
        />

        <div className="lined-paper relative overflow-hidden rounded-[2px] px-8 py-10 pl-14 sm:px-12 sm:pl-16">
          <p className="font-body text-ink text-[15px] leading-8">
            Am I just a student?{' '}
            <span className="marker-hl">Not even close</span> — not the kind
            anyone expects, at least.
          </p>

          {/* tabs everywhere — a chaotic browser tab strip */}
          <p className="font-handwritten text-ink/70 mt-6 text-2xl leading-none">
            tabs everywhere:
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className="font-mono flex items-center gap-1.5 rounded-t-md border-b-2 border-ink/20 bg-ink/[0.06] px-2.5 py-1 text-[10px] text-ink/70"
                style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.6}deg)` }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-marker/60" />
                {tab}
                <span className="text-ink/30">×</span>
              </span>
            ))}
          </div>

          <p className="font-body text-ink mt-6 text-[15px] leading-8">
            Somewhere there&apos;s a half-baked UI sketch that{' '}
            <span className="marker-hl">looked cooler in my head</span> (on paper
            it&apos;s a disaster).
          </p>

          <p className="font-body text-ink mt-4 text-[15px] leading-8">
            Learning doesn&apos;t just happen in stuffy classrooms. It happens in
            every margin, every error message, every{' '}
            <span className="marker-hl">rogue tab you forgot to kill.</span>
          </p>

          {/* margin doodle */}
          <svg
            aria-hidden
            viewBox="0 0 80 80"
            className="absolute bottom-6 right-6 h-20 w-20 opacity-40"
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

        {/* exam fragment overlapping */}
        <div
          className="paper-hard absolute -bottom-10 -left-6 hidden w-44 -rotate-6 p-3 sm:block"
          style={{ background: 'oklch(0.86 0.03 80)' }}
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

        <FoundStamp
          label="STUDENT"
          className="absolute -right-4 -top-8 z-30 sm:-right-10"
        />
      </Paper>

      <StickyNote
        rotate={5}
        className="mx-auto mt-20 max-w-[210px] text-center text-3xl text-foreground sm:ml-auto sm:mr-10"
      >
        &quot;the good notes were always in the margins&quot;
      </StickyNote>
    </section>
  )
}
