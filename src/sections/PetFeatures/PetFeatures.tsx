import {
  HeartPulse,
  Pill,
  Bell,
  Calendar,
  Users,
  ClipboardList,
} from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { FeatureCard } from '@/components/FeatureCard/FeatureCard'
import './PetFeatures.css'

const FEATURES = [
  {
    icon: HeartPulse,
    title: 'Health Tracking',
    description:
      'Track weight, vitals, activity, nutrition, sleep, and symptoms across 11 categories with trend charts.',
  },
  {
    icon: Pill,
    title: 'Medications & Vaccines',
    description:
      'Log doses, track vaccination schedules, and never miss a refill.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'Feeding times, walks, medications, grooming, vet visits — set it and forget it.',
  },
  {
    icon: Calendar,
    title: 'Vet Booking',
    description:
      'Find nearby vets on a map, see available slots, and book appointments in seconds.',
  },
  {
    icon: Users,
    title: 'Multi-Pet Profiles',
    description:
      'Manage all your pets in one place with individual health timelines.',
  },
  {
    icon: ClipboardList,
    title: 'Medical History',
    description:
      'Full medical records, exportable as PDF to share with any vet.',
  },
]

export function PetFeatures() {
  return (
    <Section
      id="features"
      title="Everything your pet needs"
      subtitle="Comprehensive health tracking inspired by the best human health apps, designed for your furry family members."
      variant="alt"
    >
      <div className="pet-features__grid">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  )
}
