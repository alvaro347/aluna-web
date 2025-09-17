import type { LucideIcon } from 'lucide-react'
import { Card } from '@/components/Card/Card'
import { IconCircle } from '@/components/IconCircle/IconCircle'
import './FeatureCard.css'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="feature-card">
      <IconCircle icon={icon} size="md" />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </Card>
  )
}
