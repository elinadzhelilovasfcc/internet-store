import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import { InputProps } from '../../../../shared/ui/Input/model';


export const useInput: InputProps = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const currentRef = useRef(value);
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }

  const reset = () => {
    setValue(initialValue);
  }

  const bindings = {
    value: value,
    onChange: handleChange
  }

  return {
    value,
    reset,
    setValue,
    currentRef,
    bindings: bindings,
  };
}
