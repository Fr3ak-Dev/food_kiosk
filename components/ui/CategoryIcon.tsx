import { Category } from '@prisma/client'
import React from 'react'

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    return (
        <div>{category.name}</div>
    )
}
