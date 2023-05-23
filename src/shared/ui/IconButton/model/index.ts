type NormalColors =
  | "primary"
  | "secondary";
type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconButtonProps {
    as?: 'a' | 'span' | 'div';
    size?: NormalSizes;
    children: React.ReactNode;
    icon: React.ReactNode;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
    color?: NormalColors;
}