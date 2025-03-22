import { NewsInterface } from "@interfaces/newsInterface";
import { getNews } from "@network/News";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (search?: string) => {
    const response = await getNews(search);
    if (response) {
      return response.data?.articles;
    }
    return [];
  }
);

const initialState = {
  news: [] as NewsInterface[],
  isLoading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.news = Array.isArray(action.payload) ? action.payload : [];
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "";
    });
  },
});

export default newsSlice.reducer;
