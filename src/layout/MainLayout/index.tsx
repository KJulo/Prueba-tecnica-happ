import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { news } = useSelector((state: RootState) => state);

  return (
    <div>
      <Topbar />
      <Sidebar history={news.history} />
      <div className="p-4 mt-16 ml-64">{children}</div>
    </div>
  );
};

export default MainLayout;
