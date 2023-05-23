type NormalColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl";
type Types = "button" | "submit" | "reset";
type As = "button" | "div" | "span";

export interface ButtonProps {
  as: As;
  key?: string;
  type?: Types;
  id?: string;
  color?: NormalColors;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  disabled?: boolean;
  size?: NormalSizes;
  isFilled?: boolean;
  icon?: React.ReactNode;
  collapsed? : boolean;
  onClick: () => void;
}