import { useState, useEffect, useRef } from 'react'
import { Menu, X, Github, Download } from 'lucide-react'
import { Logo } from '@/components/Logo/Logo'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Button } from '@/components/Button/Button'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import './NavBar.css'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'For Vets', href: '#vets' },
  { label: 'How It Works', href: '#how-it-works' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        mobileMenuRef.current?.contains(target) ||
        hamburgerRef.current?.contains(target)
      ) {
        return
      }
      setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#"
          className="navbar__logo-link"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Logo size="sm" />
        </a>

        <div className="navbar__nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__right">
          <ThemeToggle />
          <a
            href="https://github.com/alvaro347/aluna-releases"
            className="navbar__github-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <Button
            variant="primary"
            size="sm"
            href="https://github.com/alvaro347/aluna-releases/releases/latest"
          >
            <Download size={14} />
            Download
          </Button>
        </div>

        <div className="navbar__hamburger" ref={hamburgerRef}>
          <button
            className="navbar__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <ThemeToggle />
            <a
              href="https://github.com/alvaro347/aluna-releases"
              className="navbar__github-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <Button
              variant="primary"
              size="sm"
              href="https://github.com/alvaro347/aluna-releases/releases/latest"
            >
              <Download size={14} />
              Download
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
