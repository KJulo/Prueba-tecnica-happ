import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

interface NewsLayoutProps {
  children: React.ReactNode
  onSearch: (search: string) => void
  history: string[]
  isLoading: boolean
}

const NewsLayout = ({ onSearch, history, isLoading, children }: NewsLayoutProps) => {
  return (
    <div>
      <Topbar onSearch={onSearch} isLoading={isLoading} />
      <Sidebar history={history} isLoading={isLoading} onSearch={onSearch} />
      <div className="mt-16 ml-64 p-4">{children}</div>
    </div>
  )
}

export default NewsLayout
