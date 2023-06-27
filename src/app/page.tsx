import Image from 'next/image'
import { About } from '@/components/about/page'
import { Skills } from '@/components/skills/page'
import { Projects } from '@/components/projects/page'
import { Connect } from '@/components/connect/page'

export default function Home() {
  return (
    <div>
      Home
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  )
}
