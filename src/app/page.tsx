/* import Image from 'next/image'
import { client } from "@/lib/sanityClients"
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import ProductCart from './ProductCart';

export const getProductData = async () => {
  const res = await client.fetch('*[_type=="product"] {title,description}');
  return res
 } 

 
  interface IProduct {
     title: string,
     _id: string,
     description: string,
     image: IImage,
     price: number,
     category:{
      name:string
     }
 }

 export default async function Home() {
  
  const data: IProduct[] = await getProductData()

  return (
    <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-4'>
     {data.map((item) =>(
     <div>
     <ProductCart item={item} />
</div>
     ))}     
     
    </div>
  )
 } 
   */

 import Image from 'next/image'
import Hero from "@/views/Hero"
import ProductList from '@/views/ProductList'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Products */}
      <ProductList />
    </div>
  )
}
