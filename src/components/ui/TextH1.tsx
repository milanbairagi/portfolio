type props = {
  children: React.ReactNode;
  style?: string;
}

const TextH1 = ({ children, style }: props) => {
  return (
    <h1 className={`${style} text-3xl font-bold text-accent`}>
      {children}
    </h1>
  )
};

export default TextH1;