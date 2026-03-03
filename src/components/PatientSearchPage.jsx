import { useMemo, useState } from 'react'
import { SearchToolbar } from './SearchToolbar'
import { ResultsTable } from './ResultsTable'
import { PaginationControls } from './PaginationControls'

const mockPatients = [
  {
    id: '1',
    surname: 'JORDAN',
    firstName: 'Robert',
    dateOfBirth: '25/06/1956',
    mrn: '123456789',
    address: '134 Chaos Road, TWO RIVERS NSW 2300',
    selected: true
  },
  {
    id: '2',
    surname: 'JORDAN',
    firstName: 'Michael',
    dateOfBirth: '10/08/1963',
    mrn: '584147112',
    address: '47 Space Jam Road, TOON TOWN NSW 2444'
  },
  {
    id: '3',
    surname: 'PEELE',
    firstName: 'Jordan',
    dateOfBirth: '01/08/1963',
    mrn: 'N/A',
    address: '42 Scary Street, SYRACUSE NSW 2300'
  }
]

export function PatientSearchPage() {
  const [searchValue, setSearchValue] = useState('JORDAN')
  const [showDeceased, setShowDeceased] = useState(false)

  const resultCount = mockPatients.length
  const searchTerm = useMemo(() => searchValue.toUpperCase(), [searchValue])

  return (
    <section className="flex min-h-screen flex-col overflow-hidden bg-slate-50 dark:bg-slate-900">
      <SearchToolbar
        resultCount={resultCount}
        searchTerm={searchTerm}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        showDeceased={showDeceased}
        onToggleDeceased={() => setShowDeceased((value) => !value)}
      />

      <ResultsTable patients={mockPatients} />

      <PaginationControls total={resultCount} />
    </section>
  )
}
