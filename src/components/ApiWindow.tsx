import { useState } from "react";
import { FaRegFile } from "react-icons/fa";
import Window from "./Window";
import PrimaryButton from "./buttons/PrimaryButton";
import DropDown from "../common/DropDown";
import apiResponseData from "../data/apiResponse.json";
import JsonViewer from "./JsonViewer";

const requestMethods = [
  { label: "GET", value: "GET" },
  { label: "POST", value: "POST" },
] as const;

type RequestMethod = (typeof requestMethods)[number]["value"];

const apiEndpoints = [
  { label: "/api/projects", value: "/api/projects" },
  { label: "/api/portfolio", value: "/api/portfolio" },
  { label: "/api/skills", value: "/api/skills" },
  { label: "/api/contact", value: "/api/contact" },
] as const;

type ApiEndpoint = (typeof apiEndpoints)[number]["value"];

const emptyApiResponse = {
  method: "",
  status: "",
  message: "",
  fields: {},
};

const ApiWindow = () => {
  const [requestMethod, setRequestMethod] = useState<RequestMethod>("GET");
  const [apiEndpoint, setApiEndpoint] = useState<ApiEndpoint>("/api/projects");
  const [apiResponse, setApiResponse] = useState(
    JSON.stringify(emptyApiResponse, null, 2),
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiResponse = () => {
    if (!apiEndpoint) return;
    // Simulate fetching API response based on the selected endpoint
    // Time out 0.5 seconds to simulate network delay
    setIsLoading(true);
    setTimeout(() => {
      if (requestMethod === "GET") {
        const response = apiResponseData[apiEndpoint] || emptyApiResponse;
        setApiResponse(JSON.stringify(response, null, 2));
      } else {
        // Simulate a POST request response
        const response = {
          method: "POST",
          status: "success",
          message: `Successfully posted data to ${apiEndpoint}`,
          fields: {},
        };
        setApiResponse(JSON.stringify(response, null, 2));
      }
      setIsLoading(false);
    }, 500);

    const response = apiResponseData[apiEndpoint] || emptyApiResponse;
    setApiResponse(JSON.stringify(response, null, 2));
  };

  return (
    <Window>
      <FilePathBar filepath={"portfolio_controller.py"} />
      <ActionBar
        selectedMethod={requestMethod}
        onMethodChange={setRequestMethod}
        apiEndpoint={apiEndpoint}
        onEndpointChange={setApiEndpoint}
        handleExecute={fetchApiResponse}
      />
      <div className="p-2 h-75 overflow-scroll">
        {isLoading && (
          <div className="justify-center h-full flex items-center">
            <span className="text-sm text-secondary">Loading...</span>
          </div>
        )}
        {!isLoading && <JsonViewer jsonString={apiResponse} />}
      </div>
    </Window>
  );
};

const FilePathBar = ({ filepath }: { filepath: string }) => {
  return (
    <div className="px-2 py-1 gap-2 w-full h-8 bg-primary-700 flex items-center">
      <FaRegFile className="text-sm text-primary-400 h-full" />
      <span className="text-sm text-secondary">{filepath}</span>
    </div>
  );
};

type ActionBarProps = {
  selectedMethod: RequestMethod;
  onMethodChange: (method: RequestMethod) => void;
  apiEndpoint: string;
  onEndpointChange: (endpoint: ApiEndpoint) => void;
  handleExecute: () => void;
};

const ActionBar = ({
  selectedMethod,
  onMethodChange,
  apiEndpoint,
  onEndpointChange,
  handleExecute,
}: ActionBarProps) => {
  return (
    <div className="px-2 py-4 gap-2 bg-primary-600 text-sm flex items-center">
      <DropDown
        options={requestMethods.map((method) => ({
          label: method.label,
          value: method.value,
        }))}
        selectedValue={selectedMethod}
        onChange={(value: string) => onMethodChange(value as RequestMethod)}
        size="sm"
      />

      <DropDown
        options={apiEndpoints.map((endpoint) => ({
          label: endpoint.label,
          value: endpoint.value,
        }))}
        selectedValue={apiEndpoint}
        onChange={(value: string) => onEndpointChange(value as ApiEndpoint)}
        size="sm"
        type="secondary"
        divClassName="flex-1"
      />

      <PrimaryButton
        label="Execute"
        size="sm"
        className="px-2"
        onClick={handleExecute}
      />
    </div>
  );
};

export default ApiWindow;
