type KeyValueProps = {
  keyName: string;
  value: string;
  link?: string;
}

const KeyValue = ({ keyName, value, link }: KeyValueProps) => {
  return (
    <div>
      <span className="text-lg font-bold text-accent">{keyName}:</span>
      <span className="ml-2 text-lg font-medium">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
};

export default KeyValue;