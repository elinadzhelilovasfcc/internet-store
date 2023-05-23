import React from 'react'
import {IconButtonProps} from './model'
const IconButton: React.FC <IconButtonProps> = ({
    as='span',
    icon,
    className,
    color,
    children,
    ...rest
}) => {
const Tag = as as React.ElementType;
const classes = `
    icon-button
    icon-button-${color ? color : ''}
    ${icon}
    ${className}
`
  return (
    <Tag
        className={classes}
        {...rest}>
      {children}
    </Tag>
  )
}

export default IconButton