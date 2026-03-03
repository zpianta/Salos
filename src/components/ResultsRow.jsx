import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export function ResultsRow({ patient }) {
  return (
    <tr
      className={[
        'border-b border-slate-200 text-[15px] text-slate-800 transition-colors duration-150 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800/60',
        patient.selected ? 'bg-teal-200/70 text-slate-900 dark:bg-teal-900/70 dark:text-slate-50' : ''
      ].join(' ')}
    >
      <td className="px-6 py-3 font-medium">{patient.surname}</td>
      <td className="px-6 py-3">{patient.firstName}</td>
      <td className="px-6 py-3">{patient.dateOfBirth}</td>
      <td className="px-6 py-3 text-right font-mono">{patient.mrn}</td>
      <td className="max-w-[24rem] px-6 py-3">
        <span className="block truncate" title={patient.address}>
          {patient.address}
        </span>
      </td>
      <td className="px-6 py-3 text-right">
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors duration-150 hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
          title="Row actions"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className="h-4 w-4" />
        </button>
      </td>
    </tr>
  )
}
