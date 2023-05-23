import React from 'react'
import {SidebarProps} from './model'
import IconButton from '../../shared/ui/IconButton'
import {RxHamburgerMenu} from 'react-icons/rx'
import Discover from '../Discover'
import Navigation from '../Navigation'

const Sidebar: React.FC<SidebarProps> = ({
    as='div',
    className,
    ...rest
}) => {
    const Tag = as as React.ElementType
    const classes = `md:w-96 w-20 border-r border-gray-light py-4 h-100 ${className && className}`
    return (
        <Tag
            className={classes}
            {...rest}
        >   
            <Navigation as='nav' color='default' />
            <IconButton className='md:hidden' icon='menu' color='primary'>
                <RxHamburgerMenu />
            </IconButton>
            <p>Discover</p>
            <Discover as='div' />
        </Tag>
    )
}

export default Sidebar