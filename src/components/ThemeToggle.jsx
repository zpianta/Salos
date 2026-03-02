import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export function ThemeToggle({ darkMode, onToggle, collapsed }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      title={collapsed ? (darkMode ? 'Light Mode' : 'Dark Mode') : undefined}
      className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md text-inherit transition-colors duration-200 group-hover:bg-slate-200 dark:group-hover:bg-slate-700">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="h-4 w-4 shrink-0" />
      </span>
      <span className={collapsed ? 'sr-only' : ''}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}
