import { ArrowDownToLine } from 'lucide-react'
import { Container } from '@/components/Container/Container'
import { Logo } from '@/components/Logo/Logo'
import './DownloadCTA.css'

const RELEASE_URL = 'https://github.com/alvaro347/aluna-releases/releases/latest'

export function DownloadCTA() {
  return (
    <section className="download-cta" id="download">
      <Container>
        <div className="download-cta__content">
          <Logo variant="icon" size="lg" className="download-cta__logo" />
          <span className="download-cta__pre-alpha">pre-alpha</span>
          <h2 className="download-cta__title">
            Ready to put your pet's health first?
          </h2>
          <p className="download-cta__subtitle">
            Try the early build. More platforms coming soon.
          </p>
          <div className="download-cta__platforms">
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta__platform-card"
            >
              <svg
                className="download-cta__platform-icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="download-cta__platform-info">
                <span className="download-cta__platform-name">macOS</span>
                <span className="download-cta__platform-version">v0.1 — pre-alpha</span>
              </div>
              <ArrowDownToLine size={16} className="download-cta__platform-arrow" />
            </a>
          </div>
          <p className="download-cta__hint">Windows, Linux &amp; mobile builds are on the way.</p>
          <p className="download-cta__vet-link">
            Are you a vet practice?{' '}
            <a href="#vets">Learn about our practice management tools</a>
          </p>
        </div>
      </Container>
    </section>
  )
}
