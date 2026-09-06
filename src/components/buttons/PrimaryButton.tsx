
import type { ButtonHTMLAttributes, ReactNode } from "react"

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
};

const PrimaryButton = ({
  label = "Button",
  icon,
  className = "",
  type = "button",
  iconPosition = "left",
  size = "md",
  ...props
}: PrimaryButtonProps) => {
  const sizeClasses = {
    sm: "px-2 py-2 text-xs rounded-sm",
    md: "px-5 py-3 text-lg rounded-lg",
    lg: "px-6 py-4 text-xl rounded-xl",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center gap-3 border border-accent-900 bg-primary-800 leading-none font-normal text-accent-900 transition-colors duration-150 hover:bg-accent-900 hover:text-primary-600 hover:font-bold active:bg-accent-500 active:text-white active:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-900 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="text-[0.95em]">{icon}</span>
      )}
      <span>{label}</span>

      {icon && iconPosition === "right" && (
        <span className="text-[0.95em]">{icon}</span>
      )}
    </button>
  );
};

export default PrimaryButton;