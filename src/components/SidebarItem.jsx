import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SidebarItem({ icon, label, active = false, collapsed = false }) {
  return (
    <li>
      <a
        href="#"
        title={collapsed ? label : undefined}
        className={[
          'group relative flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-all duration-200',
          active
            ? 'text-brand-600 dark:text-brand-100'
            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        ].join(' ')}
      >
        <span
          className={[
            'inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200',
            active
              ? 'bg-brand-100 text-brand-600 dark:bg-slate-700 dark:text-brand-100'
              : 'text-inherit group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
          ].join(' ')}
        >
          <FontAwesomeIcon icon={icon} className="h-4 w-4 shrink-0" />
        </span>
        <span className={collapsed ? 'sr-only' : 'truncate'}>{label}</span>
      </a>
    </li>
  )
}
