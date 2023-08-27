import React from 'react';
import { Badge } from "@/components/ui/badge"
// import { AlignHorizontalDistributeStartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import  heroImage  from "../../public/hero_poster.webp"
import Image from "next/image"

const Hero = () => {
  return (
    <section className='flex flex:col lg:flex-rowgap-y-10 py-6'>
        
        {/* Left Div */}
        <div className='flex-1'>
           <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200 '>Badge</Badge>
           <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
           An Industrial Take on Streetwear</h1>

           <p className="leading-7 [&:not(:first-child)]:mt-6">
           Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black h-12 px-8 mt-3'> Start Shopping</Button>
        </div>

        {/* Right Div */}
        <div className='flex-1'>
           <Image src={heroImage} alt='hero'></Image>      
        </div>
        </section>
  );
}

export default Hero