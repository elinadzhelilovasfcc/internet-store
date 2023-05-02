type NormalColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "gradient";

type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl";
type NormalWeights = "light" | "normal" | "bold" | "extrabold" | "black";
type Types = "button" | "submit" | "reset";

export interface IButton {
  id?: string;
  type?: Types;
  className?: string;
  classNameOnHover?: string;
  text: string;
  disabled?: boolean;
  color?: NormalColors;
  size?: NormalSizes;
  weights?: NormalWeights;
  bordered?: boolean;
  auto?: boolean;
  animated?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}