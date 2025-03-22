import Button from "@components/Button";

interface SidebarProps {
  onSearch: (search: string) => void;
  history: string[];
  isLoading: boolean;
}

const Sidebar = ({ onSearch, history, isLoading }: SidebarProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSearch(e.currentTarget.textContent || "");
  };
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20  bg-white border-r border-gray-200  "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col gap-4">
        <span className="border-b-2 w-full text-center">Historial</span>
        <ul className="space-y-2 font-medium">
          {history.map((item: string, index: number) => (
            <li key={`${item}-${index}`}>
              <Button onClick={handleOnClick} isLoading={isLoading}>
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
