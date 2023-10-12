import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import image from '../assets/222.png';

const Topbar = () => {
  return (
    <div className='bg-white fixed top-0 left-[255px] z-10 max-w-[1100px] w-full'>
      <div className='flex flex-row justify-between  h-[80px] items-center px-10'>
        <div className='font-semibold text-[#8c95a1] text-[18px] '>
          <h2>Invoice</h2>
        </div>
        <div className='flex flex-row justify-evenly gap-x-4'>
          <AiOutlineBell size={30} className='fill-[#8c95a1]' />
          <div className='flex flex-row gap-x-2'>
            <img
              src={image}
              alt='image here'
              className='w-[30px] h-[30px] rounded-full'
            />
            <h3 className='text-14px  text-[#8c95a1]'>Kolade</h3>
            <MdKeyboardArrowDown size={25} className='fill-[#8c95a1]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
