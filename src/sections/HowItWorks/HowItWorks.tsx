import { Smartphone, PawPrint, Activity } from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { IconCircle } from '@/components/IconCircle/IconCircle'
import './HowItWorks.css'

const STEPS = [
  {
    icon: Smartphone,
    title: 'Download',
    description:
      'Get Aluna on Android or iOS. Create your account in under a minute.',
  },
  {
    icon: PawPrint,
    title: 'Add Your Pets',
    description:
      'Set up profiles with breed, weight, allergies, and medical history.',
  },
  {
    icon: Activity,
    title: 'Track & Thrive',
    description:
      'Log health data, set reminders, and book vet visits — all from one dashboard.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="Get started in minutes"
      variant="alt"
    >
      <div className="how-it-works__steps">
        {STEPS.map((step, index) => (
          <div key={step.title} className="how-it-works__step">
            <div className="how-it-works__step-number">{index + 1}</div>
            <IconCircle icon={step.icon} size="lg" />
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
