import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "outline" | "solid" };
const Button: React.FC<Props> = ({ className = "", variant="solid", ...props }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition border";
  const styles = variant==="outline"
    ? "bg-transparent border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
    : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
};
export default Button;
