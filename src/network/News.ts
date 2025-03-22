import { ENVIRONMENT } from '@lib/environment'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: ENVIRONMENT.NEWS_BASE_URL,
  headers: {
    'X-Api-Key': ENVIRONMENT.NEWS_API_KEY
  }
})

export const getNews = async (search?: string) => {
  try {
    const response = await apiClient.get(`/everything`, {
      params: {
        q: search
      }
    })
    return {
      status: response.status,
      data: response.data || [],
      message: 'Success'
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)
    }
  }
}
