import { Hero } from '@/components/Hero'
import { Steps } from '@/components/Steps'
import { Benefits } from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <Benefits />
      <Pricing />
      <FAQ />
      <ContactForm />
    </>
  )
}