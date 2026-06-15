'use client'

import { Paper, Tape, StickyNote } from './primitives'

export function ChapterExplorer() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-typewriter text-ink/50 text-xs tracking-[0.3em]">
          CHAPTER 04
        </p>
        <h2 className="font-typewriter text-ink mt-1 inline-block -rotate-1 text-3xl sm:text-4xl">
          The Explorer
        </h2>
      </div>

      <div className="relative grid gap-12 md:grid-cols-2">
        {/* terminal screenshot taped down */}
        <Paper rotate={-2} className="relative">
          <Tape rotate={4} className="-right-2 -top-3 z-20" />
          <Tape rotate={-4} className="-left-2 bottom-2 z-20" />
          <div className="overflow-hidden rounded-sm bg-[oklch(0.18_0.01_150)] p-4 shadow-lg">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.6_0.18_25)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.15_90)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_145)]" />
            </div>
            <pre className="font-mono text-[11px] leading-5 text-[oklch(0.82_0.18_145)]">
{`$ whoami
explorer

$ history | tail -3
  cd /rabbit-hole
  curl how-does-this-work
  git clone the-internet

$ echo $CURIOSITY
unbounded_`}
              <span className="cursor-blink">|</span>
            </pre>
          </div>
        </Paper>

        {/* network diagram in marker */}
        <Paper rotate={2} className="relative">
          <div
            className="paper-soft rounded-sm p-5"
            style={{ background: 'oklch(0.95 0.01 90 / 0.94)' }}
          >
            <p className="font-typewriter text-ink/60 text-[11px] tracking-widest">
              HOW IT ALL CONNECTS
            </p>
            <svg viewBox="0 0 260 170" className="mt-2 w-full" fill="none" aria-hidden>
              <path d="M40 40h60M100 40l50 40M40 40v60M100 130l60-50M160 80h60M160 80v50" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              {[
                [40, 40, 'idea'],
                [100, 40, 'tool'],
                [160, 80, 'system'],
                [40, 100, 'why?'],
                [100, 130, 'aha'],
                [220, 80, 'next'],
              ].map(([x, y, label]) => (
                <g key={label as string}>
                  <circle cx={x as number} cy={y as number} r="16" fill="oklch(0.95 0.01 90)" stroke="var(--marker)" strokeWidth="2" />
                  <text x={x as number} y={(y as number) + 3} fill="var(--ink)" fontSize="8" fontFamily="monospace" textAnchor="middle">{label as string}</text>
                </g>
              ))}
            </svg>
          </div>
        </Paper>
      </div>

      {/* folder tabs sticking out */}
      <div className="relative mx-auto mt-16 max-w-xl">
        <div className="relative flex gap-2 pl-6">
          {['/dns', '/kernels', '/old-forums'].map((tab, i) => (
            <span
              key={tab}
              className="font-mono text-ink rounded-t-md px-3 py-1 text-[11px] shadow-sm"
              style={{
                background: 'oklch(0.86 0.04 80)',
                transform: `rotate(${i - 1}deg)`,
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        <Paper rotate={-1} interactive={false} className="-mt-1">
          <div className="bg-paper paper-soft rounded-sm rounded-tl-none px-6 py-5">
            <StickyNote rotate={-2} className="text-ink text-3xl">
              &quot;how did I even get here?&quot;
            </StickyNote>
            <p className="font-body text-ink/70 mt-2 text-sm leading-7">
              Every answer is a doorway to three better questions. I keep the
              folders. I rarely close the tabs.
            </p>
          </div>
        </Paper>
      </div>
    </section>
  )
}
