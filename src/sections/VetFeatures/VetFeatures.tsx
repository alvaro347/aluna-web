import {
  Calendar,
  ClipboardList,
  Receipt,
  Package,
  Pill,
  BarChart3,
} from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { FeatureCard } from '@/components/FeatureCard/FeatureCard'
import './VetFeatures.css'

const FEATURES = [
  {
    icon: Calendar,
    title: 'Appointments',
    description:
      'Day, week, and month views with drag-to-reschedule and walk-in handling.',
  },
  {
    icon: ClipboardList,
    title: 'SOAP Notes',
    description:
      'Structured consult notes linked directly to patient records.',
  },
  {
    icon: Receipt,
    title: 'Billing & Invoicing',
    description:
      'Itemised invoices tied to visits with payment status tracking.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Track medications, vaccines, and supplies with reorder alerts.',
  },
  {
    icon: Pill,
    title: 'E-Prescribing',
    description:
      'Digital prescriptions with dose tracking and refill management.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Revenue, patient visits, and vaccination coverage at a glance.',
  },
]

export function VetFeatures() {
  return (
    <Section
      id="vets"
      title="Built for modern vet practices"
      subtitle="A complete practice management platform that connects you directly with pet owners."
    >
      <div className="vet-features__grid">
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
