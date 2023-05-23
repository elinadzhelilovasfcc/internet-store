type CardVariants = 'shadow' | 'flat' | 'bordered';
type NormalWeights = 'light' | 'normal' | 'bold' | 'extrabold' | 'black';

export interface CardProps {
    variant: CardVariants;
    children? : React.ReactNode | React.ReactNode[];
    as?: React.HTMLAttributes<HTMLElement> | string;
    weight?: NormalWeights;
    isBlurred?: boolean;
    isHoverable?: boolean;
    isPressable?: boolean;
    disableAnimation?: boolean;
    disableRipple?: boolean;
    allowTextSelectionOnPress?: boolean;
}