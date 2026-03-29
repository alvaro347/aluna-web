import { Container } from '@/components/Container/Container'
import { Button } from '@/components/Button/Button'
import './DownloadCTA.css'

export function DownloadCTA() {
  return (
    <section className="download-cta" id="download">
      <Container>
        <div className="download-cta__content">
          <h2 className="download-cta__title">
            Ready to put your pet's health first?
          </h2>
          <p className="download-cta__subtitle">
            Download Aluna today and join thousands of pet parents taking
            charge of their pet's wellbeing.
          </p>
          <div className="download-cta__actions">
            <Button variant="outline" size="lg" href="#" className="download-cta__btn-ios">
              Coming Soon
            </Button>
          </div>
          <p className="download-cta__vet-link">
            Are you a vet practice?{' '}
            <a href="#vets">Learn about our practice management tools</a>
          </p>
        </div>
      </Container>
    </section>
  )
}
