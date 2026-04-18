import {
  HeartPulse,
  Moon,
  PawPrint,
  Download,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/Container/Container'
import { Button } from '@/components/Button/Button'
import { Badge } from '@/components/Badge/Badge'
import './Hero.css'

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
              <Badge variant="accent">Pet Health Tracking App</Badge>
            </div>
            <p className="hero__subtitle">
              Track 11 health categories, book vet visits, get reminders — all
              in one app. Built for pet owners who care, and the vets who serve
              them.
            </p>
            <div className="hero__actions">
              <Button
                variant="primary"
                size="lg"
                href="https://github.com/alvaro347/aluna-releases/releases/latest"
              >
                <Download size={18} />
                Download for macOS
              </Button>
              <Button variant="outline" size="lg" href="#vets">
                For Vet Practices
              </Button>
            </div>
          </div>

          {/*
            Original phone-mockup UI — kept here as a reference backup.
            To revive it: re-add the imports (HeartPulse, Pill, Bell,
            Activity, Calendar, Moon, PawPrint), restore MOCK_CARDS and
            CHART_BARS constants, and replace the <div className="hero__graphic">
            block below with:

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
                    MOCK_CARDS.map(card => icon + label card)
                  </div>
                  <div className="hero__phone-section">
                    <span className="hero__phone-section-title">Activity This Week</span>
                    <div className="hero__phone-chart">
                      CHART_BARS.map(height => .hero__phone-bar)
                    </div>
                  </div>
                  <div className="hero__phone-section">
                    progress row + track + fill (73%)
                  </div>
                  <div className="hero__phone-reminder">
                    Bell icon + "Vet checkup — Tomorrow, 10:00 AM"
                  </div>
                </div>
              </div>

            The .hero__phone* CSS classes are still defined in Hero.css
            for easy restoration.
          */}

          <div className="hero__graphic" aria-hidden="true">
            {/* Ambient gradient blobs */}
            <div className="hero__blob hero__blob--primary" />
            <div className="hero__blob hero__blob--accent" />

            {/* Dashed orbital rings */}
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />

            {/* Central medallion: Luna the pet */}
            <div className="hero__medallion">
              <svg
                className="hero__medallion-moon"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M165,100 A65,65 0 1,1 100,35 A48,48 0 0,0 165,100 Z"
                  className="hero__medallion-moon-shape"
                />
              </svg>

              <svg
                className="hero__pet"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ears */}
                <path
                  d="M55,78 L70,32 L95,66 Z"
                  className="hero__pet-fill"
                />
                <path
                  d="M145,78 L130,32 L105,66 Z"
                  className="hero__pet-fill"
                />
                {/* Inner ears */}
                <path
                  d="M65,68 L73,42 L85,63 Z"
                  className="hero__pet-accent"
                />
                <path
                  d="M135,68 L127,42 L115,63 Z"
                  className="hero__pet-accent"
                />
                {/* Face */}
                <ellipse
                  cx="100"
                  cy="115"
                  rx="62"
                  ry="58"
                  className="hero__pet-fill"
                />
                {/* Cheek blush */}
                <ellipse
                  cx="72"
                  cy="128"
                  rx="10"
                  ry="6"
                  className="hero__pet-blush"
                />
                <ellipse
                  cx="128"
                  cy="128"
                  rx="10"
                  ry="6"
                  className="hero__pet-blush"
                />
                {/* Eyes */}
                <ellipse
                  cx="82"
                  cy="108"
                  rx="6.5"
                  ry="8.5"
                  className="hero__pet-eye"
                />
                <ellipse
                  cx="118"
                  cy="108"
                  rx="6.5"
                  ry="8.5"
                  className="hero__pet-eye"
                />
                {/* Eye shine */}
                <circle cx="84" cy="105" r="2" className="hero__pet-shine" />
                <circle cx="120" cy="105" r="2" className="hero__pet-shine" />
                {/* Nose */}
                <path
                  d="M95,128 Q100,134 105,128 Q102,132 100,132 Q98,132 95,128 Z"
                  className="hero__pet-nose"
                />
                {/* Mouth */}
                <path
                  d="M100,132 Q100,140 93,138"
                  className="hero__pet-stroke"
                />
                <path
                  d="M100,132 Q100,140 107,138"
                  className="hero__pet-stroke"
                />
                {/* Whiskers */}
                <path d="M68,126 L48,122" className="hero__pet-whisker" />
                <path d="M68,132 L48,134" className="hero__pet-whisker" />
                <path d="M132,126 L152,122" className="hero__pet-whisker" />
                <path d="M132,132 L152,134" className="hero__pet-whisker" />
              </svg>

              {/* ECG pulse line sweeping across the medallion */}
              <svg
                className="hero__medallion-pulse"
                viewBox="0 0 200 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 L55,15 L65,4 L75,26 L85,10 L95,22 L105,15 L200,15"
                  className="hero__medallion-pulse-stroke"
                />
              </svg>
            </div>

            {/* Floating stat chips */}
            <div className="hero__chip hero__chip--heart">
              <span className="hero__chip-icon hero__chip-icon--heart">
                <HeartPulse size={16} strokeWidth={2.2} />
              </span>
              <span className="hero__chip-text">
                <span className="hero__chip-value">
                  72<em>bpm</em>
                </span>
                <span className="hero__chip-label">Heart rate</span>
              </span>
            </div>

            <div className="hero__chip hero__chip--activity">
              <span className="hero__chip-icon hero__chip-icon--activity">
                <PawPrint size={16} strokeWidth={2.2} />
              </span>
              <span className="hero__chip-text">
                <span className="hero__chip-value">
                  8.2<em>k</em>
                </span>
                <span className="hero__chip-label">Steps today</span>
              </span>
            </div>

            <div className="hero__chip hero__chip--sleep">
              <span className="hero__chip-icon hero__chip-icon--sleep">
                <Moon size={16} strokeWidth={2.2} />
              </span>
              <span className="hero__chip-text">
                <span className="hero__chip-value">9h 20m</span>
                <span className="hero__chip-label">Rest</span>
              </span>
            </div>

            {/* Decorative twinkles */}
            <Sparkles className="hero__sparkle hero__sparkle--1" size={18} />
            <Sparkles className="hero__sparkle hero__sparkle--2" size={12} />
            <Sparkles className="hero__sparkle hero__sparkle--3" size={14} />
          </div>
        </div>
      </Container>
    </section>
  )
}
