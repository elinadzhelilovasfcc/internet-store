import React from 'react'
import { ButtonProps } from './model'

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
const Button: React.FC<ButtonProps> = ({
    className,
    as='button',
    color='primary',
    size='md',
    isFilled,
    children,
    disabled,
    collapsed,
    icon,
    onClick,
    ...restOfProps
}) => {
    const sizes = () => {
        switch (size) {
            case 'sm':
                return 'px-4 py-1 text-xs'
            case 'md':
                return 'px-10 py-2 text-base'
            case 'lg':
                return 'px-12 py-2 text-lg'
            case 'xl':
                return 'px-14 py-2 text-xl'
            default:
                return 'px-10 py-2 text-base'
        }
    }

    const classes = `
        btn
        focus:(bg-hover border-hover outline-none text-white)
        active:(bg-active border-active text-white)
        ${icon && collapsed && 'btn-collapsed btn-collapsed-' + color}
        ${size && sizes()}
        ${className && className}
        ${isFilled ? 'btn-filled-' + color : 'btn-' + color}
        ${disabled && 'btn-disabled'}
    `
    const Tag = as as React.ElementType;
    return (
        <Tag
            className={classes}
            {...restOfProps}
            onClick={onClick}
        >
            {icon && <span className='icon'>{icon}</span>}
            {children && <span className='text'>{children}</span>}
        </Tag>
    )
}

export default Button