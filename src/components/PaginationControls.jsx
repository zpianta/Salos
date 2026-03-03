export function PaginationControls({ total }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Previous
        </button>
        <button
          type="button"
          className="rounded-md border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Next
        </button>

        <select
          defaultValue="50"
          className="rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 outline-none transition-colors duration-150 hover:bg-slate-200 focus:border-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">1–{total} of {total} (Page 1 of 1)</p>
    </footer>
  )
}
