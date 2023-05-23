
import { Dispatch, SetStateAction, MutableRefObject } from 'react';

type NormalColors = 
  'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
type NormalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type NormalWeights = 'light' | 'normal' | 'bold';
type InputType = 'email' | 'search' | 'text' | 'password' | 'url' | 'number' | 'time' | 'date';
type ContentPosition = 'left' | 'right';


export type Helper = {
  text?: string;
  color?: NormalColors;
}

export interface IInputFieldProps {
  type?: InputType;
  bordered?: boolean;
  animated?: boolean;
  labelPlaceholder?: string;
  placeholder?: string;
  disabled?: boolean;
  status?: NormalColors;
  color?: NormalColors;
  helperColor?: NormalColors;
  helperText?: string;
  size?: NormalSizes;
  weight?: NormalWeights;
  contentPosition?: ContentPosition;
}


export type InputProps = (initialValue: string) => {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  currentRef: MutableRefObject<string>;
  reset: () => void;
  bindings: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
};
