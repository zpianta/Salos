import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { ResultsRow } from './ResultsRow'

export function ResultsTable({ patients }) {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-50 dark:bg-slate-950/30">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-10 bg-slate-600 text-left text-xs uppercase tracking-widest text-slate-100 dark:bg-slate-800">
          <tr>
            <th scope="col" className="px-6 py-3 font-semibold">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-2 text-left text-xs uppercase tracking-widest"
              >
                Surname
                <FontAwesomeIcon icon={faArrowDown} className="h-3 w-3" />
              </button>
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              First Name
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              Date of Birth
            </th>
            <th scope="col" className="px-6 py-3 text-right font-semibold">
              MRN
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              Address
            </th>
            <th scope="col" className="px-6 py-3 text-right font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <ResultsRow key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
