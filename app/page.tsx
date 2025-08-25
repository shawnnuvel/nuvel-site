import { Hero } from '@/components/Hero'
import { Steps } from '@/components/Steps'
import { Benefits } from '@/components/Benefits'
import { UseCaseTile } from '@/components/UseCaseTile'
import { RiskReversal } from '@/components/RiskReversal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <Benefits />
      <UseCaseTile />
      <RiskReversal />
    </>
  )
}