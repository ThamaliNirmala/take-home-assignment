import type { CardProps } from "../../types/types";

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`rounded-2xl border p-4 shadow-md ${className}`}>
    {children}
  </div>
);
