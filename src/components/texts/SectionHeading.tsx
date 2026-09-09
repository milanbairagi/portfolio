const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-4 text-2xl font-bold text-secondary">
      <span className="text-accent-900 text-2xl font-bold mr-2">~/</span>
      {title}
    </h2>
  );
};

export default SectionHeading;
