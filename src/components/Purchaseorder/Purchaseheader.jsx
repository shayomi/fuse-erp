import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const Purchaseheader = () => {
  return (
    <div className='bg-transparent max-w-[1100px] w-full absolute top-[80px] left-[260px] h-full  items-center '>
      <div className='flex flex-row justify-between  h-[80px] items-center px-6'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-semibold text-[24px] text-[#8c95a1]'>
            Purchase Order
          </h1>
          <p className='text-[14px] text-[#8c95a1]'>
            You currently have 26 purchase orders
          </p>
        </div>
        <div>
          <Link to='/'>
            <button className=' bg-[#2563eb] rounded-lg px-2 py-3 text-[12px] text-white font-medium'>
              <span className='flex flex-row gap-x-3'>
                <AiOutlinePlus size={20} className='fill-[#fff]' />
                <p className='text-[14px] text-white font-medium'>
                  Create new purchase order
                </p>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Purchaseheader;
