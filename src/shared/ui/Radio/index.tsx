import React from 'react';
import { Radio } from '@nextui-org/react';
import {RadioProps} from './model';

const RadioCustom: React.FC<RadioProps> = ({ options, value }) => {
    return (
        <Radio.Group>
            {options.map((option) => (
                <Radio key={option} value={value}>{option}</Radio>
            ))}
        </Radio.Group>
    );
  };

export default RadioCustom;