type SimpleColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
  type NormalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type NormalOrientation = 'horizontal' | 'vertical';

export interface RadioProps {
    options: string[];
    value: string;
    labelColor?: string;
    color?: SimpleColors;
    size?: NormalSizes;
    defaultValue?: string;
    description?: string | React.ReactNode;
    isDisabled?: boolean;
    autoFocus?: boolean;
    disableAnimation?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (isFocused: boolean) => void;
    onFocusChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }

  export interface RadioGroupProps {
    id?: string;
    children?: React.ReactNode;
    label?: string;
    value?: string;
    defaultValue?: string;
    color?: SimpleColors | string;
    labelCOlor?: SimpleColors | string;
    size?: NormalSizes;
    name?: string;
    orientation?: NormalOrientation;
    validationSTate?: 'valid' | 'invalid';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    onChange?: (value: any) => void;
  }