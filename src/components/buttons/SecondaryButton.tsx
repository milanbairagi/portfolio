import type { ButtonHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
};

const SecondaryButton = ({
  label = "Button",
  icon,
  className = "",
  type = "button",
  iconPosition = "left",
  size = "md",
  ...props
}: SecondaryButtonProps) => {
  const sizeClasses = {
    sm: "px-2 py-2 text-xs rounded-sm",
    md: "px-5 py-3 text-lg rounded-lg",
    lg: "px-6 py-4 text-xl rounded-xl",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-between gap-3 border border-primary-400 bg-primary-600 leading-none font-normal text-white transition-colors duration-150 hover:bg-primary-400 active:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-900 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${className}`}
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

export default SecondaryButton;
