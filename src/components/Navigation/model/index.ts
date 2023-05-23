type NormalColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export interface NavigationProps {
    as?: React.ElementType | string;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    color?: NormalColors;
}