import { Highlight, themes } from "prism-react-renderer"

const JsonViewer = ({ jsonString }: { jsonString: string }) => {

  return (
    <Highlight theme={themes.gruvboxMaterialDark} code={jsonString} language="json">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{...style, backgroundColor: "transparent"}} className="text-sm">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default JsonViewer;
