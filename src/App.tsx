import MainLayout from "@layout/MainLayout";
import NewInformation from "@modules/NewsInformation";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { fetchNews } from "@redux/slice/news";

function App() {
  const { news } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  console.log(news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <MainLayout>
      <NewInformation news={news.news} isLoading={news.isLoading} />
    </MainLayout>
  );
}

export default App;
