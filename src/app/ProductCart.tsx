"use client"

import React, { FC } from 'react';
import Image from 'next/image'
import { client } from "@/lib/sanityClients"
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';


const ProductCart:FC<any> = (item) => {
    const handleAddToCart = async () => {
        const res = fetch("api/cart", {
           method : "POST",
           body: JSON.stringify({
            product_id: item._id
           }) 
        })
        const result = (await res).json()
        console.log(result)
    }
   return (
    <>
    <Image 
          width={200}
          height ={300}
          className='max-h-[200px] object-cover object-bottom'
      src={urlForImage(item.image).url()} alt="product" />
      
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <button onClick={() => {handleAddToCart}} className='border-py-2 px-6 rounded bg-blue-600'>Add to Cart</button>
      </>
  );
}

export default ProductCart;





