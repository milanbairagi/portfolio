
type props = {
  children: React.ReactNode;
};

const MainWindow = ({ children }: props) => {
  return (
    <div className="border-2 border-border rounded-lg p-4 mt-4 container mx-auto">
      {children}
    </div>
  );
};

export default MainWindow;