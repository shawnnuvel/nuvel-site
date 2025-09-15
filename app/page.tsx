import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { ProblemSolution } from '@/components/ProblemSolution'
import { Deliverables } from '@/components/Deliverables'
import { HowTeamsUse } from '@/components/HowTeamsUse'
import { RiskReversal } from '@/components/RiskReversal'
import Pricing from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Deliverables />
      <HowTeamsUse />
      <RiskReversal />
      <Pricing />
      <FAQ />
      <ContactForm />
    </>
  )
}