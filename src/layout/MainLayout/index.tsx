import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
  onSearch: (search: string) => void;
  history: string[];
  isLoading: boolean;
}

const MainLayout = ({
  onSearch,
  history,
  isLoading,
  children,
}: MainLayoutProps) => {
  return (
    <div>
      <Topbar onSearch={onSearch} isLoading={isLoading} />
      <Sidebar history={history} isLoading={isLoading} onSearch={onSearch} />
      <div className="p-4 mt-16 ml-64">{children}</div>
    </div>
  );
};

export default MainLayout;
