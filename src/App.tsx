import MainLayout from "@layout/MainLayout";
import NewInformation from "@modules/NewsInformation";

import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

function App() {
  const { news } = useSelector((state: RootState) => state);

  return (
    <MainLayout>
      <NewInformation
        news={news.news}
        isLoading={news.isLoading}
        error={news.error}
      />
    </MainLayout>
  );
}

export default App;
