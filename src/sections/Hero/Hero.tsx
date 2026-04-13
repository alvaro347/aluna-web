import {
  HeartPulse,
  Pill,
  Bell,
  Activity,
  Calendar,
  Moon,
  PawPrint,
} from 'lucide-react'
import { Container } from '@/components/Container/Container'
import { Button } from '@/components/Button/Button'
import { Badge } from '@/components/Badge/Badge'
import './Hero.css'

const MOCK_CARDS = [
  { icon: HeartPulse, label: 'Vitals', color: '#E74C3C' },
  { icon: Activity, label: 'Activity', color: '#3498DB' },
  { icon: Pill, label: 'Meds', color: '#2E7D5B' },
  { icon: Bell, label: 'Reminders', color: '#F39C12' },
  { icon: Calendar, label: 'Booking', color: '#9B59B6' },
  { icon: Moon, label: 'Sleep', color: '#1ABC9C' },
]

const CHART_BARS = [40, 65, 50, 80, 70, 90, 60]

export function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Your pet's health, <span className="hero__highlight">simplified</span>
            </h1>
            <div className="hero__badge">
              <Badge>Pet Health Tracking App</Badge>
            </div>
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
                <div className="hero__phone-pet-row">
                  <div className="hero__phone-avatar">
                    <PawPrint size={14} />
                  </div>
                  <span className="hero__phone-pet">Luna's Dashboard</span>
                  <span className="hero__phone-status" />
                </div>
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

              <div className="hero__phone-section">
                <span className="hero__phone-section-title">Activity This Week</span>
                <div className="hero__phone-chart">
                  {CHART_BARS.map((height, i) => (
                    <div
                      key={i}
                      className="hero__phone-bar"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="hero__phone-section">
                <div className="hero__phone-progress-row">
                  <span className="hero__phone-section-title">Daily Goals</span>
                  <span className="hero__phone-progress-value">73%</span>
                </div>
                <div className="hero__phone-progress-track">
                  <div className="hero__phone-progress-fill" style={{ width: '73%' }} />
                </div>
              </div>

              <div className="hero__phone-reminder">
                <Bell size={12} style={{ color: '#F39C12' }} />
                <span>Vet checkup — Tomorrow, 10:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
