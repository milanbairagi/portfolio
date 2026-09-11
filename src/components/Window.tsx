type props = {
  title?: string;
  children?: React.ReactNode;
};

const Window = ({ title, children }: props) => {
  return (
    <div className="flex-col border border-primary-400 min-h-72 rounded-lg overflow-hidden flex">
      <TopBar title={title} />
      {children}
    </div>
  );
};

const TopBar = ({ title }: { title?: string }) => {
  return (
    <div className="px-2 py-2 justify-center w-full h-8 bg-primary-600 relative flex items-center">
      {title && <div>{title}</div>}

      {/* Three dots */}
      <div className="gap-2 top-1/2 absolute right-2 -translate-y-1/2 flex items-center">
        <span className="w-3 h-3 rounded-full bg-red"></span>
        <span className="w-3 h-3 rounded-full bg-yellow"></span>
        <span className="w-3 h-3 rounded-full bg-green"></span>
      </div>
    </div>
  );
};

export default Window;
