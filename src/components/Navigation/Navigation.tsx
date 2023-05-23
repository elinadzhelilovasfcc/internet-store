import React from 'react'
import useRouter from '../../hooks/useRouter/index'
import { NavigationProps } from './model/index'
import { navigation } from '../../utils/constants'
import Link from '../../shared/ui/Link'

const Navigation: React.FC<NavigationProps> = ({
    as = 'nav',
    color,
    className,
    ...rest
}) => {
    const Tag = as as React.ElementType
    const router = useRouter()
    const classes = `flex flex-col items-start gap-2 ${className && className}`

    const isActive = (path: string) => {
        console.log(path, router.currentPath)
        return router.currentPath === path ? 'active' : '';
    };

    return (
        <Tag
            {...rest}
        >
            <ul className={classes}>
                {navigation.map((item) => (
                    <li className='w-full' key={item.name}>
                        <Link
                            color={isActive(item.href) ? 'primary' : 'default'}
                            size='lg'
                            isBgOnHover
                            icon={item.icon}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Tag>
    )
}

export default Navigation