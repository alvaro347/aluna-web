import type { ReactNode } from 'react'
import { Container } from '@/components/Container/Container'
import './Section.css'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  variant?: 'default' | 'alt' | 'dark'
  children: ReactNode
  className?: string
}

export function Section({
  id,
  title,
  subtitle,
  variant = 'default',
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${variant} ${className}`.trim()}
    >
      <Container>
        {title && (
          <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
