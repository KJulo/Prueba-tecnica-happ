const Sidebar = () => {
  return (
    <aside id="default-sidebar" className="w-64 h-screen" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 border-l-gray-600 ">
        <ul className="space-y-2 font-medium">
          <li>
            <span className="ms-3">Historial</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
