import MainLayout from "@layout/MainLayout";
import NewInformation from "@modules/NewsInformation";

import { NEWS_MOCKUP } from "./mockup/newsmockup";

function App() {
  //! Here use redux to manage the state of the application

  return (
    <MainLayout>
      <NewInformation news={NEWS_MOCKUP} isLoading={false} />
    </MainLayout>
  );
}

export default App;
