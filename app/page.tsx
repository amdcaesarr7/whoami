import { Hero } from '@/components/scrapbook/hero'
import { ChapterStudent } from '@/components/scrapbook/chapter-student'
import { ChapterBuilder } from '@/components/scrapbook/chapter-builder'
import { ChapterRepair } from '@/components/scrapbook/chapter-repair'
import { ChapterExplorer } from '@/components/scrapbook/chapter-explorer'
import { BlankPage } from '@/components/scrapbook/blank-page'
import { Atmosphere } from '@/components/scrapbook/atmosphere'
import { ExploreProvider, ExploreHud, Scene } from '@/components/scrapbook/explore'

const chapters = ['Student', 'Builder', 'Fixer', 'Explorer', "What's Next"]

export default function Home() {
  return (
    <ExploreProvider total={chapters.length}>
      <main className="relative overflow-x-hidden">
        {/* cinematic ambient layers */}
        <Atmosphere />
        <div aria-hidden className="vignette" />
        <div aria-hidden className="grain-overlay" />

        {/* exploration HUD */}
        <ExploreHud />

        <Hero />

        <Scene id="student">
          <ChapterStudent />
        </Scene>
        <Scene id="builder">
          <ChapterBuilder />
        </Scene>
        <Scene id="repair">
          <ChapterRepair />
        </Scene>
        <Scene id="explorer">
          <ChapterExplorer />
        </Scene>
        <Scene id="next">
          <BlankPage />
        </Scene>
      </main>
    </ExploreProvider>
  )
}
