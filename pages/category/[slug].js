
import ProductCard from '@/components/ProductCard';
import Wrapping from '@/components/Wrapping'
import React from 'react';


const Category = () => {
 
  return (
    <div className='w-full md:py-16'>
        <Wrapping>
            <div className='item-center max-w-[300px] mx-auto mt-8 md:mt-0'>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                    Running Shoes
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

        </div>
        </Wrapping>
    </div>
  )
}

export default Category