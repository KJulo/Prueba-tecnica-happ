interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
