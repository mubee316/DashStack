import Image from 'next/image';
import React from 'react';

const DealsDetails = () => {
  return (
    <div className='w-full h-auto bg-white rounded-md shadow-md p-8 mt-10'>
      <h1 className='text-lg font-bold mb-6'>Deals Details</h1>

      {/* Header Row */}
      <div className='grid grid-cols-6 bg-gray-200 rounded-md p-4 mb-4'>
        <div className='font-semibold'>Product Name</div>
        <div className='font-semibold'>Location</div>
        <div className='font-semibold'>Date-Time</div>
        <div className='font-semibold'>Piece</div>
        <div className='font-semibold'>Amount</div>
        <div className='font-semibold'>Status</div>
      </div>

      {/* Product Row */}
      <div className='grid grid-cols-6 items-center gap-4 p-4'>
        <div className='flex items-center'>
          <Image
            src="/apple.jpg"
            alt="Product"
            width={40}
            height={40}
            className='w-10 h-10 rounded-md object-cover mr-4'
          />
          <span>Apple Watch</span>
        </div>
        <div>6096 Marjolaine Landing</div>
        <div>12.09.2019 - 12:53 PM</div>
        <div>423</div>
        <div>$34,295</div>
        <div>In Stock</div>
      </div>
      <div className='border border-gray-200 mt-4'></div>

    </div>
  );
};

export default DealsDetails;
