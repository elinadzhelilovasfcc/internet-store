import React from 'react';
import { Button } from "@nextui-org/react";
import useHover from '../../lib/hooks/useHover';
import { IButton } from './model';

/**
 * ButtonCustom is a custom button component that accepts several props to customize its behavior and appearance.
 * @param {Object} props - Object containing the props for the component.
 * @param {string} props.id - The ID of the button.
 * @param {string} props.type - The type of the button (e.g. "submit", "reset", "button").
 * @param {string} props.className - The class name for the button.
 * @param {string} props.classNameOnHover - The class name for the button when it's being hovered over.
 * @param {string} props.text - The text to display on the button.
 * @param {boolean} props.disabled - Whether or not the button is disabled.
 * @param {string} props.color - The color of the button (e.g. "primary", "secondary", "warning").
 * @param {string} props.weights - The font weights for the text on the button (e.g. "regular", "bold").
 * @param {string} props.size - The size of the button (e.g.
*/
const ButtonCustom: React.FC<IButton> = ({
    id,
    type,
    className,
    classNameOnHover='btn-hover',
    text,
    disabled,
    color,
    weights,
    size,
    animated,
    auto,
    onClick,
    ...restOfProps
}) => {
    // Get the hover state and event handlers using the useHover hook
    const { isHovering, onMouseEnter, onMouseLeave } = useHover();
    // Render the button with the appropriate class name and event handlers
    return (
        <Button
            className={`${className} ${isHovering ? classNameOnHover : ''}`}
            {...restOfProps}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {text}
        </Button>
    )
}

export default ButtonCustom;