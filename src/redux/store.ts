import { configureStore } from '@reduxjs/toolkit'

import newsReducer from './slice/news'

export const store = configureStore({
  reducer: {
    news: newsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
