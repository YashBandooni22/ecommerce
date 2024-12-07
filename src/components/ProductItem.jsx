import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({name,age,id,price}) => {

const currency = useContext(ShopContext)
console.log(currency)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    </Link>
    )
}

export default ProductItem