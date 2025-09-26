import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/Logo/Logo'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Button } from '@/components/Button/Button'
import './NavBar.css'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'For Vets', href: '#vets' },
  { label: 'How It Works', href: '#how-it-works' },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#"
          className="navbar__logo-link"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Logo />
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__links-actions">
            <ThemeToggle />
            <Button variant="primary" size="sm" href="#download">
              Get the App
            </Button>
          </div>
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            className="navbar__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
