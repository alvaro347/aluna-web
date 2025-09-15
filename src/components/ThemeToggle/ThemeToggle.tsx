import { Sun, Moon } from 'lucide-react'
import { useThemeContext } from '@/contexts/ThemeContext'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
