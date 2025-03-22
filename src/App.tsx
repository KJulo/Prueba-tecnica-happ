import MainLayout from "@layout/MainLayout";
import NewInformation from "@modules/NewsInformation";

import { fetchNews } from "@redux/slice/news";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";

function App() {
  const { news } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (search: string) => {
    if (search) {
      dispatch(fetchNews(search));
    }
  };

  return (
    <MainLayout
      onSearch={handleSearch}
      history={news.history}
      isLoading={news.isLoading}
    >
      <NewInformation
        news={news.news}
        isLoading={news.isLoading}
        error={news.error}
      />
    </MainLayout>
  );
}

export default App;
