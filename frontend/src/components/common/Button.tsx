import type { ButtonProps } from "../../types/types";

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  ...props
}) => {
  const base = "cursor-pointer font-medium transition-colors";
  const sizeClass = size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2";
  const variantClass =
    variant === "ghost"
      ? "bg-transparent hover:bg-gray-700"
      : "bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <button
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
