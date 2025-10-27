import { Hero } from '@/sections/Hero/Hero'
import { PetFeatures } from '@/sections/PetFeatures/PetFeatures'
import { VetFeatures } from '@/sections/VetFeatures/VetFeatures'
import { HowItWorks } from '@/sections/HowItWorks/HowItWorks'
import { Testimonials } from '@/sections/Testimonials/Testimonials'
import { DownloadCTA } from '@/sections/DownloadCTA/DownloadCTA'

function HomePage() {
  return (
    <main>
      <Hero />
      <PetFeatures />
      <VetFeatures />
      <HowItWorks />
      <Testimonials />
      <DownloadCTA />
    </main>
  )
}

export default HomePage
