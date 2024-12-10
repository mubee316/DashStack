import CarouselComponent from '@/components/Carousel'
import Link from 'next/link'
import React from 'react'
import { FaHeart } from 'react-icons/fa'

const date = new Date()

const page = () => {
  return (
    <div className="flex flex-col flex-grow mt-10 p-0">
        <div className='flex-grow ml-10'>
        <h1 className='font-bold text-2xl'>Products</h1>
        <div className='w-[1040px] h-[346px] bg-blue-600 mt-4  rounded-xl p-10 px-20 flex flex-col justify-between'>
            <p className='text-white text-sm'>
                {date.toDateString()}
            </p>
            <h1 className='font-bold text-white text-3xl'>Enjoy free home <br /> delivery in this summer

            </h1>
            <p className='text-white text-sm'>Designer Dresses - Pick from trendy Desugner Dress</p>

            <Link  href='/product' className='px-4 py-2 bg-orange-500 w-max text-white rounded-md'>Get Started</Link>
        </div>
        <div className='flex justify-between '>
            <div className='w-[340px] h-[400px] bg-white rounded-xl mt-10 shadow-lg'>
                <CarouselComponent/>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-between p-4 gap-2 mt-4'>
                        <h1 className='font-bold'>Apple Watch Series 4</h1>
                        <p className='text-blue-500'>$120.00</p>
                        <Link href='/product' className='bg-blue-100 px-4 py-2 w-max rounded-xl font-bold'>View product</Link>
                    </div>
                    <div className='p-10 mb-10 px-3 py-3 rounded-full bg-blue-100 '><FaHeart/></div>
                </div>
            </div>
            <div className='w-[340px] h-[400px] bg-white rounded-xl mt-10 shadow-lg'>
                <CarouselComponent/>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-between p-4 gap-2 mt-4'>
                        <h1 className='font-bold'>Apple Watch Series 4</h1>
                        <p className='text-blue-500'>$120.00</p>
                        <Link href='/product' className='bg-blue-100 px-4 py-2 w-max rounded-xl font-bold'>View product</Link>
                    </div>
                    <div className='p-10 mb-10 px-3 py-3 rounded-full bg-blue-100 '><FaHeart/></div>
                </div>
            </div>
            <div className='w-[340px] h-[400px] bg-white rounded-xl mt-10 shadow-lg'>
                <CarouselComponent/>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-between p-4 gap-2 mt-4'>
                        <h1 className='font-bold'>Apple Watch Series 4</h1>
                        <p className='text-blue-500'>$120.00</p>
                        <Link href='/product' className='bg-blue-100 px-4 py-2 w-max rounded-xl font-bold'>View product</Link>
                    </div>
                    <div className='p-10 mb-10 px-3 py-3 rounded-full bg-blue-100 '><FaHeart/></div>
                </div>
            </div>
           
        </div>
        </div>
      

    </div>
  )
}

export default page