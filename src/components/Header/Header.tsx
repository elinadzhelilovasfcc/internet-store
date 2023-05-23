import React from 'react'
import {HeaderProps} from './model'
import logo from '../../assets/Logo/logo.png'

const Header: React.FC<HeaderProps> = ({
    as='header',
    className,
    ...rest
}) => {
    const Tag = as as React.ElementType
    const classes = `w-full flex justify-between items-center px-6 py-2 border-b border-gray-light`
    return (
        <Tag className={classes} {...rest}>
            <div className='container mx-auto'>
                <div className='w-10'>
                    <img className='w-full' src={logo} alt="logo" />
                </div>
            </div>
        </Tag>
    )
}

export default Header