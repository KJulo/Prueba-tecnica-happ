import Spinner from '@components/Spinner'
import { NewsInterface } from '@interfaces/newsInterface'
import NewInformation from './components/NewInformation'
import { useEffect, useMemo, useState } from 'react'
import Select from '@components/Select'
import { DEFAULT_SELECTED_FILTER } from './constants'

interface NewInformationProps {
  news: NewsInterface[] | []
  isLoading: boolean
  error: string | ''
}

const NewsInformation = ({ news, isLoading, error }: NewInformationProps) => {
  const [selectedFilter, setSelectedFilter] = useState(DEFAULT_SELECTED_FILTER)
  const filterOptions = useMemo(
    () =>
      news.reduce(
        (acc, curr) => {
          if (curr.source.name && !acc.includes(curr.source.name)) {
            acc.push(curr.source.name)
          }
          return acc
        },
        [DEFAULT_SELECTED_FILTER] as string[]
      ),
    [news]
  )

  useEffect(() => {
    setSelectedFilter(DEFAULT_SELECTED_FILTER)
  }, [news])

  const currentNews = useMemo(() => {
    if (selectedFilter === DEFAULT_SELECTED_FILTER) {
      return news
    }
    return news.filter((newData) => newData.source.name === selectedFilter)
  }, [news, selectedFilter])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value)
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <span>Ha ocurrido un error. Por favor, inténtelo de nuevo.</span>
  }

  if (news.length === 0) {
    return <div>No hay noticias que mostrar.</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <Select items={filterOptions} onChange={handleSelect} />
      {currentNews.map((newData, index) => (
        <NewInformation key={index} newData={newData} />
      ))}
    </div>
  )
}

export default NewsInformation
