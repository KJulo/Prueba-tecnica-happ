import { useState } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'

interface TopbarProps {
  onSearch: (search: string) => void
  isLoading: boolean
}

const Topbar = ({ onSearch, isLoading }: TopbarProps) => {
  const [search, setSearch] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleSearch = () => {
    onSearch(search)
  }
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Input onChange={handleChange} placeholder={'Buscar noticias'} className={'rounded-l-lg'} />
            <Button onClick={handleSearch} isLoading={isLoading} className="rounded-r-lg">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
