export interface PricingPlan {
  id: string
  name: string
  subtitle: string
  price: number
  scope: {
    themes: number
    anchors: number
    regions: number
  }
  output: {
    pods: number
    includes: string[]
  }
  turnaround: string
  rushCost?: number
  bestFor: string
  recommended?: boolean
}

export interface AddOn {
  id: string
  name: string
  price: number
  description: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pods',
    name: 'Pods Report',
    subtitle: 'US$4,000',
    price: 4000,
    scope: {
      themes: 1,
      anchors: 5,
      regions: 1
    },
    output: {
      pods: 3,
      includes: ['PDF + CSV']
    },
    turnaround: '48h',
    rushCost: 1000,
    bestFor: 'Teams scouting investable pods in a narrow thesis.',
    recommended: true
  },
  {
    id: 'custom',
    name: 'Custom Thesis',
    subtitle: 'from US$9,000',
    price: 9000,
    scope: {
      themes: 3,
      anchors: 12,
      regions: 999 // global
    },
    output: {
      pods: 7,
      includes: ['PDF + CSV', 'IC slide per pod', 'Theme Expansion included']
    },
    turnaround: '3 business days',
    bestFor: 'Broader canvasses or specialty tech areas.',
    recommended: false
  }
]

export const addOns: AddOn[] = [
  {
    id: 'extra-theme',
    name: 'Extra theme',
    price: 1250,
    description: 'Additional theme analysis'
  },
  {
    id: 'extra-anchors',
    name: 'Extra 3 anchors',
    price: 750,
    description: 'Additional anchor employer analysis'
  },
  {
    id: 'extra-region',
    name: 'Extra region (US/EU/APAC)',
    price: 750,
    description: 'Additional regional coverage'
  },
  {
    id: 'extra-pod',
    name: 'Extra pod card',
    price: 600,
    description: 'Additional pod beyond guarantee'
  },
  {
    id: 'warm-path',
    name: 'Warm-Path Kit',
    price: 1500,
    description: 'Intro paths CSV'
  },
  {
    id: 'ic-slides',
    name: 'IC Slide Pack',
    price: 1000,
    description: '5 slides'
  }
]

export function calculatePrice(planId: string, selectedAddOns: string[], rush: boolean): number {
  const plan = pricingPlans.find(p => p.id === planId)
  if (!plan) return 0
  
  let total = plan.price
  
  // Add rush cost
  if (rush && plan.rushCost) {
    total += plan.rushCost
  }
  
  // Add selected add-ons
  selectedAddOns.forEach(addOnId => {
    const addOn = addOns.find(a => a.id === addOnId)
    if (addOn) {
      total += addOn.price
    }
  })
  
  return total
}
