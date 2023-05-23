import React from 'react'
// import useHover from '../../lib/hooks/useHover'
import { LinkProps } from './model'

/**
 * A reusable link component that adds hover effects to the link.
 *
 * @param {string} as - The type of element to render. Defaults to 'a'.
 * @param {string} text - The text to display in the link.
 * @param {string} className - The class name to apply to the link.
 * @param {string} classNameOnHover - The class name to apply to the link when hovered over.
 * @param {object} restOfProps - The rest of the props to pass to the `Link` component.
 */
const Link: React.FC<LinkProps> = ({
    as = 'a',
    children,
    className,
    color='default',
    isBgOnHover,
    isUnderlineonHover,
    icon,
    href,
    ...rest
}) => {
    const Tag = as as React.ElementType
    const classes = `btn-link flex items-center
    justify-center xl:justify-start
    ${isBgOnHover && 'hover:bg-gray-light py-3'}
    ${isUnderlineonHover && 'hover:underline'}
    ${icon && 'link-icon'}
    cursor-pointer font-semibold link-${color} ${className}`

    return (
        <Tag
            href={href}
            className={classes}
            {...rest}
        >
            <span className='icon'>{icon && icon}</span>
            <span className='text'>{children}</span>
        </Tag>
    )
}

export default Link