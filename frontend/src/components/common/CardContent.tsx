import type { CardContentProps } from "../../types/types";

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => <div className={`text-sm ${className}`}>{children}</div>;
