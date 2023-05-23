type LinkColors =
  | "text"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

type NormalSize = "sm" | "lg";

export interface LinkProps {
    as?: React.ElementType | string;
    id?: string;
    className?: string;
    color?: LinkColors;
    isBgOnHover?: boolean;
    isUnderlineonHover?: boolean;
    href: string;
    blank?: boolean;
    size?: NormalSize;
    children?: React.ReactNode | React.ReactNode[] | string;
    underline?: boolean;
    onClick? (element: React.MouseEvent): void;
    icon?: React.ReactNode;
    ref?: React.HTMLAttributeAnchorTarget | null;
}