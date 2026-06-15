import { Hero } from '@/components/scrapbook/hero'
import { ChapterStudent } from '@/components/scrapbook/chapter-student'
import { ChapterBuilder } from '@/components/scrapbook/chapter-builder'
import { ChapterRepair } from '@/components/scrapbook/chapter-repair'
import { ChapterExplorer } from '@/components/scrapbook/chapter-explorer'
import { BlankPage } from '@/components/scrapbook/blank-page'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div aria-hidden className="grain-overlay" />
      <Hero />
      <ChapterStudent />
      <ChapterBuilder />
      <ChapterRepair />
      <ChapterExplorer />
      <BlankPage />
    </main>
  )
}
