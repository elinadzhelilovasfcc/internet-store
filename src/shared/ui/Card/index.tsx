import React from 'react'
import { Card } from "@nextui-org/react"
import { CardProps } from "./model"

const CardCustom: React.FC<CardProps> = ({
    as,
    children,
    variant,
    ...rest
}) => {
    return (
        <Card
            {...rest}
        >
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}

export default CardCustom