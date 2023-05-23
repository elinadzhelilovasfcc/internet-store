import React from 'react'
import { Input } from "@nextui-org/react"
import { Helper, IInputFieldProps } from './model'
import { useInput } from '../../../shared/lib/hooks/useInput'
import { useMemo } from 'react'
import { resources }  from '../../../configs/i18next/index'
import { useTranslation } from 'react-i18next'
declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources["en"]
  }
}

/**
 * Renders an input field with a type of 'email' by default, but can be customized.
 *
 * @param {string} type - The type of input field to render (default: 'email').
 * @param {...Object} rest - Additional props to pass to the input field.
 * @return {JSX.Element} - The input field component.
 */
const InputField: React.FC<IInputFieldProps> = ({type = 'email', ...rest}) => {
  let inputType = type || 'email';
  const { value, reset, bindings } = useInput('');
  const { t } = useTranslation();
  /**
 * Check if a string is a valid email address.
 * @param {string} value - The string to check.
 * @returns {boolean} - Whether the string is a valid email address or not.
 */
  const validateEmail = (value: string) => {
    // Regular expression to match email addresses.
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  };

  const errorMsg = t(`input:${inputType}.error`);
  const successMsg = t(`input:${inputType}.success`);

  const helper:Helper = useMemo(() => {
    let isValid = false;

    if (!value)
      return {
        text: '',
        color: 'primary'
      };
    isValid = validateEmail(value);
    return {
      text: isValid ? successMsg : errorMsg,
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <Input
      type={inputType}
      {...bindings}
      {...rest}
      disabled={false}
      onClearClick={reset}
      status={helper.color}
      color={helper.color}
      helperColor={helper.color}
      helperText={helper.text}
    />
  )
}

export default InputField