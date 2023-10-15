import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

const Rightbar = () => {
  return (
    <div className='top-0 left-[1100px] fixed z-1 w-[250px] bg-white h-full'>
      <div className=' flex flex-col gap-[20rem] content-between  mt-[4rem]  '>
        <div className='px-5 pt-10 flex flex-col gap-y-4'>
          <div className='mb-4'>
            <h2 className='text-[14px] text-[#8c95a1] font-medium '>
              Create New Service Invoice
            </h2>
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='flex flex-row gap-x-3'>
              <BsCheckCircle size={20} className='fill-[#24a37c]' />
              <p className='text-[#24a37c] font-medium text-[14px]'>
                Customer Details
              </p>
            </span>
            <span className='flex flex-row gap-x-3'>
              <BsCheckCircle size={20} className='fill-[#2563eb]' />
              <p className='text-[#2563eb] font-medium text-[14px]'>
                Invoice Detail
              </p>
            </span>
            <span className='flex flex-row gap-x-3'>
              <BsCheckCircle size={20} className='fill-[#8c95a1]' />
              <p className='text-[#8c95a1] font-medium text-[14px]'>Preview</p>
            </span>
          </div>
        </div>
        <div className='flex flex-row gap-x-3 items-end justify-center'>
          <button className='border-[1px] border-[#2563eb] bg-[#a3b3d6] rounded-lg px-2 py-4 text-[12px] text-white font-medium'>
            Save as draft
          </button>
          <button className=' bg-[#2563eb] rounded-lg px-2 py-4 text-[12px] text-white font-medium'>
            Proceed to preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
