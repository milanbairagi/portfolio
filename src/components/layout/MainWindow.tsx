
type props = {
  children: React.ReactNode;
  styles?: string;
};

const MainWindow = ({ children, styles }: props) => {
  return (
    <div className={`border-2 border-border rounded-lg p-4 mt-4 container mx-auto ${styles}`}>
      {children}
    </div>
  );
};

export default MainWindow;