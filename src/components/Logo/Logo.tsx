import { PawPrint } from 'lucide-react'
import './Logo.css'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`logo ${className}`.trim()}>
      <PawPrint size={28} className="logo__icon" />
      <span className="logo__text">Aluna</span>
    </div>
  )
}
