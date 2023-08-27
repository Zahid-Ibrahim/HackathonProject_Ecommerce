import React from 'react';
import P1 from '../../public/p1.webp';
import P2 from '../../public/p2.webp';
import P3 from '../../public/p5.webp';
import Image from "next/image";
import ProductCard from '@/components/ProductCard';

const ProductList = () => {
  return (
    <div className='flex justify-evenly mt-16'>
      <ProductCard title="Imperial Alpaca Hoodie" price={200} img={P1} category= "women" id={123} />
      <ProductCard title="Flex Push Button Bomber" price={150} img={P2} category= "men" id={456}/>
      <ProductCard title="Flex SheatShirt" price={100} img={P3} category= "women" id={789}/>

    </div>
  );
}

export default ProductList;

