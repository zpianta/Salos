import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import { PatientSearchPage } from './PatientSearchPage'

export function AppLayout() {
  const [darkMode, setDarkMode] = useState(false)
  const collapsed = true

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-slate-200 font-sans text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
      <Sidebar collapsed={collapsed} darkMode={darkMode} onToggleDarkMode={() => setDarkMode((value) => !value)} />

      <main className="ml-20 min-h-screen">
        <PatientSearchPage />
      </main>
    </div>
  )
}
