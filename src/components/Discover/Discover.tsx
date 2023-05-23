import React from 'react'
import { DiscoverProps } from './model'
import Button from '../../shared/ui/Button'
import { topics } from '../../utils/constants'

const Discover: React.FC<DiscoverProps> = ({
    as = 'div'
}) => {
    const Tag = as as React.ElementType
    const classes = 'flex flex-wrap max-md:flex-col items-center gap-2'
    return (
        <Tag className={classes}>
            {topics.map((topic) => (
                <Button
                    as='button'
                    color='primary'
                    size='sm'
                    className='mx-1 my-1'
                    key={topic.name}
                    collapsed
                    onClick={(() => console.log())}
                    icon={topic.icon}>
                    {topic.name}
                </Button>
            ))}
        </Tag>
    )
}

export default Discover