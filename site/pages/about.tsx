import Hero from '@components/about/Hero'
import AboutUs from '@components/about/AboutUs'
import History from '@components/about/History'
import Newsletter from '@components/about/Newsletter'
import { Layout } from '@components/common'

export default function About() {
  return (
    <div>
      <Hero />
      <History />
      <AboutUs />
      <Newsletter />
    </div>
  )
}

About.Layout = Layout
