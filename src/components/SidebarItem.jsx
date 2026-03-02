import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SidebarItem({ icon, label, active = false, collapsed = false }) {
  return (
    <li>
      <a
        href="#"
        title={collapsed ? label : undefined}
        className={[
          'group relative flex items-center gap-3 rounded-lg border-l-2 px-3 py-2 text-sm font-medium transition-all duration-200',
          active
            ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-100'
            : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        ].join(' ')}
      >
        <FontAwesomeIcon icon={icon} className="h-4 w-4 shrink-0" />
        <span className={collapsed ? 'sr-only' : 'truncate'}>{label}</span>
      </a>
    </li>
  )
}
