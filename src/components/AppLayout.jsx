import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faCircleCheck,
  faClock,
  faFileWaveform,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'

const statCards = [
  { label: 'Active Patients', value: '1,284', delta: '+4.2%', icon: faUserGroup },
  { label: 'Appointments Today', value: '42', delta: '+8.1%', icon: faCalendar },
  { label: 'Pending Charts', value: '17', delta: '-2.3%', icon: faFileWaveform },
  { label: 'Avg. Wait Time', value: '14 min', delta: '-6.8%', icon: faClock }
]

const upcomingAppointments = [
  { patient: 'Mia Thompson', time: '09:30 AM', provider: 'Dr. Patel' },
  { patient: 'Noah Carter', time: '10:00 AM', provider: 'Dr. Ramirez' },
  { patient: 'Ava Nguyen', time: '11:15 AM', provider: 'Dr. Jensen' },
  { patient: 'Ethan Lewis', time: '01:20 PM', provider: 'Dr. Kim' }
]

export function AppLayout() {
  const [darkMode, setDarkMode] = useState(false)
  const collapsed = true

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
      <Sidebar collapsed={collapsed} darkMode={darkMode} onToggleDarkMode={() => setDarkMode((value) => !value)} />

      <main className="ml-20 min-h-screen p-4 transition-all duration-200 sm:p-6 lg:p-8">
        <section className="min-h-[calc(100vh-2rem)] rounded-xl bg-white p-5 shadow-shell dark:bg-slate-900 sm:p-7">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome back, Zachary!</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Monday, March 2</p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card) => (
              <article
                key={card.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-200 dark:border-slate-700 dark:bg-slate-800/60"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
                  <FontAwesomeIcon icon={card.icon} className="text-brand-600 dark:text-brand-100" />
                </div>
                <p className="text-2xl font-semibold">{card.value}</p>
                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{card.delta} this week</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 lg:col-span-2 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-100">
                  View all
                </a>
              </div>
              <ul className="space-y-3">
                {upcomingAppointments.map((item) => (
                  <li
                    key={item.patient}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.patient}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.provider}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.time}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
              <h2 className="mb-3 text-lg font-semibold">System Status</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                  Patient sync operational
                </li>
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                  Claims processing healthy
                </li>
                <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                  Reporting queue stable
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
