import { NewsInterface } from '@interfaces/newsInterface'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNews } from '@network/news'
import { MAX_HISTORY } from './constants'

export const fetchNews = createAsyncThunk('news/fetchNews', async (search: string) => {
  const response = await getNews(search)
  if (response) {
    return {
      data: response.data?.articles as NewsInterface[],
      search: search
    }
  }
  return { data: [] as NewsInterface[], search: search }
})

const initialState = {
  news: [] as NewsInterface[],
  isLoading: false,
  error: '',
  history: [] as string[]
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.news = action.payload.data
      state.history =
        state.history.length >= MAX_HISTORY
          ? [action.payload.search, ...state.history.slice(0, MAX_HISTORY - 1)]
          : [action.payload.search, ...state.history]
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || ''
    })
  }
})

export default newsSlice.reducer
