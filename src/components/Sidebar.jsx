import {
  faArrowLeft,
  faCalendar,
  faChartColumn,
  faChartLine,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faUser,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { SidebarItem } from './SidebarItem'
import { ThemeToggle } from './ThemeToggle'

const primaryNavigation = [
  { label: 'Home', icon: faHouse, active: true },
  { label: 'Search', icon: faMagnifyingGlass },
  { label: 'Patients', icon: faUserGroup },
  { label: 'Appointments', icon: faCalendar },
  { label: 'Charts', icon: faChartLine },
  { label: 'Reports', icon: faChartColumn }
]

const secondaryNavigation = [
  { label: 'Back to Admin', icon: faArrowLeft },
  { label: 'Settings', icon: faGear },
  { label: 'Profile', icon: faUser }
]

export function Sidebar({ collapsed, darkMode, onToggleDarkMode }) {
  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-20 flex-col border-r border-slate-200 bg-white px-3 py-5 shadow-sm transition-all duration-200 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8 flex items-center justify-center px-2">
        <div
          className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-300 via-indigo-300 to-purple-400 shadow-md"
          aria-label="Logo"
          title="Salos ERM"
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {primaryNavigation.map((item) => (
            <SidebarItem key={item.label} {...item} collapsed={collapsed} />
          ))}
        </ul>

        <div className="my-4 border-t border-slate-200 dark:border-slate-700" />

        <div className="space-y-1">
          <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} collapsed={collapsed} />
          {secondaryNavigation.map((item) => (
            <SidebarItem key={item.label} {...item} collapsed={collapsed} />
          ))}
        </div>
      </nav>
    </aside>
  )
}
