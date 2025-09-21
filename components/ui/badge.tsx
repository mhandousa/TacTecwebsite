import * as React from "react";
type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: "outline" | "solid" };
export const Badge: React.FC<Props> = ({ className="", variant="outline", ...props }) => {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs border";
  const styles = variant==="outline" ? "border-gray-300 text-gray-700" : "bg-blue-600 text-white border-blue-600";
  return <span className={`${base} ${styles} ${className}`} {...props} />;
};
