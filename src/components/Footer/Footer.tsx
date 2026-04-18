import { Logo } from '@/components/Logo/Logo'
import { Github } from 'lucide-react'
import './Footer.css'

const PRODUCT_LINKS = [
  { label: 'Pet App', href: '#features' },
  { label: 'Vet Dashboard', href: '#vets' },
  { label: 'Pricing', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo size="md" />
            <p className="footer__tagline">
              Pet health tracking for owners, practice management for vets.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Product</h4>
            {PRODUCT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            {COMPANY_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Legal</h4>
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Aluna. All rights reserved.
          </p>
          <div className="footer__social">
            <a
              href="https://github.com/alvaro347/aluna-releases"
              className="footer__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
