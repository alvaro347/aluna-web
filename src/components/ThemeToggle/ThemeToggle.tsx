import { Sun, Moon } from 'lucide-react'
import { useThemeContext } from '@/contexts/ThemeContext'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun size={14} className="theme-toggle__icon" />
      <Moon size={14} className="theme-toggle__icon" />
      <span className="theme-toggle__knob" />
    </button>
  )
}
