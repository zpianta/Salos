import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((value) => !value)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((value) => !value)}
      />

      <main
        className={[
          'min-h-screen p-6 transition-all duration-200 sm:p-8',
          collapsed ? 'ml-20' : 'ml-72'
        ].join(' ')}
      >
        <section className="h-[calc(100vh-3rem)] rounded-xl bg-white p-6 shadow-shell dark:bg-slate-900 sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back, Zachary!</h1>

          <div className="mt-10 flex h-[calc(100%-5rem)] items-center justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-800/60">
              <div className="mx-auto mb-6 h-28 w-28 rounded-2xl bg-gradient-to-br from-cyan-200 via-indigo-200 to-purple-300 opacity-80" />
              <p className="text-sm text-slate-500 dark:text-slate-400">Dashboard content will appear here.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
