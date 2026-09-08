import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ClickAwayListener from "./ClickAwayListener";

type DropDownProps = {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  type?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  btnClassName?: string;
  divClassName?: string;
};

const DropDown = ({
  options,
  selectedValue,
  onChange,
  btnClassName,
  type = "primary",
  size = "md",
  divClassName = "",
}: DropDownProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const sizeClasses = {
    sm: "px-2 py-2 text-xs rounded-sm",
    md: "px-5 py-3 text-lg rounded-lg",
    lg: "px-6 py-4 text-xl rounded-xl",
  };

  const typeClasses = {
    primary:
      "border-accent-900 bg-primary-800 text-accent-900 hover:bg-accent-900 hover:text-primary-600 hover:font-bold active:bg-accent-500 active:text-white active:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-900 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900",
    secondary:
      "border-primary-400 bg-primary-600 text-white hover:bg-primary-400 active:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-900 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900",
  };

  return (
    <div className={`relative cursor-pointer ${divClassName}`}>
      <ClickAwayListener onClickAway={() => setShowOptions(false)}>
        <div
          className={`w-full inline-flex justify-between items-center gap-3 border leading-none font-normal transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${typeClasses[type]} ${btnClassName}`}
          onClick={() => setShowOptions(!showOptions)}
        >
          <span>{selectedValue}</span>
          <span
            className={`${showOptions && "rotate-180"} transform transition-transform text-[0.95em]`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          className={`${
            showOptions ? "block" : "hidden"
          } absolute w-full max-h-56 overflow-y-scroll z-10 bg-primary-800 border border-primary-400 rounded-b-lg no-scrollbar`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 text-secondary hover:bg-primary-400 hover:text-white cursor-pointer"
              onClick={() => {
                onChange(option.value);
                setShowOptions(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </ClickAwayListener>
    </div>
  );
};

export default DropDown;
