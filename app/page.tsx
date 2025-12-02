import { Hero } from '@/components/Hero'
import { WhatTrueGraphDoes } from '@/components/WhatTrueGraphDoes'
import { WhoThisIsFor } from '@/components/WhoThisIsFor'
import { DemoTeams } from '@/components/DemoTeams'
import { Steps } from '@/components/Steps'
import { DataAndMethod } from '@/components/DataAndMethod'
import { StatusAndAccess } from '@/components/StatusAndAccess'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <WhatTrueGraphDoes />
      <WhoThisIsFor />
      <DemoTeams />
      <Steps />
      <DataAndMethod />
      <StatusAndAccess />
      <FAQ />
      <ContactForm />
    </div>
  )
}