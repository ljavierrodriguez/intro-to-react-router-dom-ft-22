import React from 'react'
import { useParams } from 'react-router-dom'

const Shop = () => {

    const { category, subcategory } = useParams();

    return (
        <>
        <div>Shop</div>
        <div>{category} / {subcategory}</div>
        </>
    )
}

export default Shop