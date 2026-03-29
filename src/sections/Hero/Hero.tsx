import {
  HeartPulse,
  Pill,
  Bell,
  Activity,
  Calendar,
  Moon,
} from 'lucide-react'
import { Container } from '@/components/Container/Container'
import { Button } from '@/components/Button/Button'
import './Hero.css'

const MOCK_CARDS = [
  { icon: HeartPulse, label: 'Vitals', color: '#E74C3C' },
  { icon: Activity, label: 'Activity', color: '#3498DB' },
  { icon: Pill, label: 'Meds', color: '#2E7D5B' },
  { icon: Bell, label: 'Reminders', color: '#F39C12' },
  { icon: Calendar, label: 'Booking', color: '#9B59B6' },
  { icon: Moon, label: 'Sleep', color: '#1ABC9C' },
]

export function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Your pet's health, <span className="hero__highlight">simplified</span>
            </h1>
            <p className="hero__subtitle">
              Track 11 health categories, book vet visits, get reminders — all
              in one app. Built for pet owners who care, and the vets who serve
              them.
            </p>
            <div className="hero__actions">
              <Button variant="secondary" size="lg" href="#download">
                Coming Soon
              </Button>
              <Button variant="outline" size="lg" href="#vets">
                For Vet Practices
              </Button>
            </div>
          </div>

          <div className="hero__mockup">
            <div className="hero__phone">
              <div className="hero__phone-notch" />
              <div className="hero__phone-header">
                <span className="hero__phone-greeting">Good morning!</span>
                <span className="hero__phone-pet">Luna's Dashboard</span>
              </div>
              <div className="hero__phone-grid">
                {MOCK_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className="hero__phone-card"
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                    <span>{card.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
