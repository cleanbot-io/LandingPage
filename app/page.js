import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Subscribe from '../components/Subscribe'
import WaitlistCta from '../components/WaitlistCTA'
import InfoSection from '../components/InfoSection'
import Image from 'next/image'
import {Shiba} from './3drobot'
import { Suspense } from 'react'
import Loading from '../components/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <HeroSection />
      <WaitlistCta />
      <InfoSection />
      <Subscribe/>
      <Footer />
    </Suspense>
  )
}
