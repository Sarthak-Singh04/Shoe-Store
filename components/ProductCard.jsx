import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link href={"/product/1"} className='transform overflow-hidden bg-white duration-200 hover:scale-105'>
        <img src="/product-1.webp" ></img>
        <div className='p-4 text-black/[0.9]'><h2 className='text-lg font-medium'>Product</h2></div>
        <div className='flex items-center pl-4 text-black/[0.5]'>
            <p className='mr-2 text-lg font-semibold line-through'>$50</p>
            <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
        </div>
    </Link>
  )
}

export default ProductCard