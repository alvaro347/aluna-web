import './Logo.css'

interface LogoProps {
  className?: string
  variant?: 'text' | 'icon'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', variant = 'text', size = 'md' }: LogoProps) {
  const src = variant === 'icon' ? '/logo_plain.png' : '/logo_text.png'
  const alt = variant === 'icon' ? 'Aluna Pet icon' : 'Aluna Pet'

  return (
    <img
      src={src}
      alt={alt}
      className={`logo logo--${variant} logo--${size} ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  )
}
