import { useState } from "react";
import { FaRegFile } from "react-icons/fa";
import Window from "./Window";
import PrimaryButton from "./buttons/PrimaryButton";
import DropDown from "../common/DropDown";

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

const ApiWindow = () => {
  const [requestMethod, setRequestMethod] = useState<RequestMethod>("GET");
  const [apiEndpoint, setApiEndpoint] = useState<ApiEndpoint>("/api/projects");

  return (
    <Window>
      <FilePathBar filepath={"portfolio_controller.py"} />
      <ActionBar
        selectedMethod={requestMethod}
        onMethodChange={setRequestMethod}
        apiEndpoint={apiEndpoint}
        onEndpointChange={setApiEndpoint}
      />
      <div className="p-2 h-75 overflow-scroll"></div>
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
};

const ActionBar = ({
  selectedMethod,
  onMethodChange,
  apiEndpoint,
  onEndpointChange,
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

      <PrimaryButton label="Execute" size="sm" className="px-2" />
    </div>
  );
};

export default ApiWindow;
