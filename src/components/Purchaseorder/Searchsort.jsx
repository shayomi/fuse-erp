import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import PurchaseOrderList from './purchaseorderList';

const Searchsort = () => {
  return (
    <div className='bg-transparent max-w-[1100px] w-full absolute top-[160px] left-[260px]  items-center  h-full  bg-white mt-5'>
      <div className='flex flex-row justify-between  h-[60px] items-center px-6 bg-white'>
        <div className='flex flex-row gap-x-3'>
          <div className='border-[1px] border-[#8c95a1] rounded-md'>
            <div className='py-1 px-4 flex flex-row gap-x-2'>
              <FaSearch size={15} className='text-[#8c95a1]' />
              <p className='text-[#8c95a1] text-[10px] font-medium'>
                Search by vendor's name,id,amout...
              </p>
            </div>
          </div>
          <div className='border-[1px] border-[#8c95a1] rounded-md cursor-pointer'>
            <div className='py-1 px-4 flex flex-row gap-x-2'>
              <p className='text-[#8c95a1] text-[10px] font-medium'>Status</p>
              <MdKeyboardArrowDown size={15} className='text-[#8c95a1]' />
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-x-3'>
          <p className='text-[#8c95a1] text-[12px] font-medium py-1 '>Sort</p>
          <div className='border-[1px] border-[#8c95a1] rounded-md cursor-pointer'>
            <div className='py-1 px-4 flex flex-row gap-x-2'>
              <p className='text-[#8c95a1] text-[10px] font-medium'>
                Date Added
              </p>
              <MdKeyboardArrowDown size={15} className='text-[#8c95a1]' />
            </div>
          </div>
          <div className='border-[1px] border-[#8c95a1] rounded-md cursor-pointer'>
            <div className='py-1 px-4 flex flex-row gap-x-2'>
              <p className='text-[#8c95a1] text-[10px] font-medium'>Export</p>
              <MdKeyboardArrowDown size={15} className='text-[#8c95a1]' />
            </div>
          </div>
        </div>
      </div>
      <PurchaseOrderList />
    </div>
  );
};

export default Searchsort;
