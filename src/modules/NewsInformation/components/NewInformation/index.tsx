import { NewsInterface } from '@interfaces/newsInterface'
import { useState } from 'react'

interface NewInformationProps {
  newData: NewsInterface
}

const NewInformation = ({ newData }: NewInformationProps) => {
  const [error, setError] = useState(false)

  const handleErrorImage = () => {
    setError(true)
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 border-2 rounded-2xl border-gray-200 p-4">
      <div className="flex flex-row gap-4">
        <img
          width={160}
          height={160}
          src={
            error
              ? 'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF'
              : newData.urlToImage
          }
          className="aspect-video h-40 w-40 object-cover"
          onError={handleErrorImage}
        />
        <h1 className="text-2xl font-bold">{newData.title}</h1>
      </div>
      <div className="flex flex-row flex-wrap w-full">
        <p className="w-full">{newData.description}</p>
        <a
          href={newData.url.toString()}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline ml-auto hover:text-blue-700 transition-all"
        >
          Leer más
        </a>
      </div>
    </div>
  )
}

export default NewInformation
