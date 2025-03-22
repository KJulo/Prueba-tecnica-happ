import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={"flex flex-row"}>
      <div>
        <Sidebar />
      </div>
      <div className={"flex flex-col w-full"}>
        <div>
          <Topbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
