import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRotateLeft, faSliders } from '@fortawesome/free-solid-svg-icons'

export function SearchToolbar({
  resultCount,
  searchTerm,
  searchValue,
  onSearchChange,
  showDeceased,
  onToggleDeceased
}) {

  return (
    <header className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
          <span className="text-teal-600 dark:text-teal-400">{resultCount} results</span> for{' '}
          <span className="uppercase">{searchTerm}</span>
        </h1>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <label className="inline-flex cursor-pointer items-center gap-2 text-2xl font-medium text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={showDeceased}
              onChange={onToggleDeceased}
              className="h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900"
            />
            Show Deceased
          </label>

          <div className="relative w-80 max-w-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search patients"
              className="h-10 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-xl text-slate-900 shadow-sm outline-none transition-colors duration-200 focus:border-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-500 text-white shadow-sm transition-colors duration-200 hover:bg-teal-600"
            title="Reset search"
          >
            <FontAwesomeIcon icon={faRotateLeft} className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-500 text-white shadow-sm transition-colors duration-200 hover:bg-teal-600"
            title="Advanced filters"
          >
            <FontAwesomeIcon icon={faSliders} className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
