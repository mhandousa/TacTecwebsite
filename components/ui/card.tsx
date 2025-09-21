import * as React from "react";
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className="", ...props }) => (
  <div className={`rounded-xl border shadow-sm bg-white/60 dark:bg-white/5 ${className}`} {...props} />
);
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className="", ...props }) => (
  <div className={`p-4 border-b ${className}`} {...props} />
);
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className="", ...props }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className="", ...props }) => (
  <div className={`p-4 ${className}`} {...props} />
);
