import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { history } = useSelector((state: RootState) => state.news);

  return (
    <div>
      <Topbar />
      <Sidebar history={history} />
      <div className="p-4 mt-16 sm:ml-64">{children}</div>
    </div>
  );
};

export default MainLayout;
