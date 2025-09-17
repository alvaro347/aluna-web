import type { LucideIcon } from 'lucide-react'
import './IconCircle.css'

interface IconCircleProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function IconCircle({
  icon: Icon,
  size = 'md',
  className = '',
}: IconCircleProps) {
  const iconSize = size === 'sm' ? 18 : size === 'lg' ? 28 : 22

  return (
    <div className={`icon-circle icon-circle--${size} ${className}`.trim()}>
      <Icon size={iconSize} />
    </div>
  )
}
