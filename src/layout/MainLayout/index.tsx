import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="p-4 mt-16 sm:ml-64">{children}</div>
    </div>
  );
};

export default MainLayout;
