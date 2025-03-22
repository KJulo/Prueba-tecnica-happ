import Button from '@components/Button'

interface SidebarProps {
  onSearch: (search: string) => void
  history: string[]
  isLoading: boolean
}

const Sidebar = ({ onSearch, history, isLoading }: SidebarProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSearch(e.currentTarget.textContent || '')
  }
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-white px-3 pb-4">
        <span className="w-full border-b-2 text-center">Historial</span>
        <ul className="space-y-2 font-medium">
          {history.map((item: string, index: number) => (
            <li key={`${item}-${index}`}>
              <Button onClick={handleOnClick} isLoading={isLoading} className="w-full rounded-lg">
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
