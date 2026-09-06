import { FaRegFile } from "react-icons/fa";
import Window from "./Window";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { IoIosArrowDown } from "react-icons/io";

type props = {
  filepath: string;
  apiEndpoint: string;
  children?: React.ReactNode;
}

const ApiWindow = ({ filepath, apiEndpoint, children}: props) => {
  return (
    <Window>
      <FilePathBar filepath={filepath} />
      <ActionBar apiEndpoint={apiEndpoint} />
      <div className="p-2 h-75 overflow-scroll">
        {children}
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
  )
};

type ActionBarProps = {
  apiEndpoint: string;
};

const ActionBar = ({ apiEndpoint }: ActionBarProps) => {
  return (
    <div className="px-2 py-4 gap-2 bg-primary-600 text-sm flex items-center">
      <PrimaryButton label="Get" size="sm" iconPosition="right" icon={<IoIosArrowDown />} className="px-2" />
      <SecondaryButton label={apiEndpoint} size="sm" iconPosition="right" icon={<IoIosArrowDown />} className="flex-1" />
      <PrimaryButton label="Execute" size="sm" className="px-2" />

    </div>
  );
};


export default ApiWindow;