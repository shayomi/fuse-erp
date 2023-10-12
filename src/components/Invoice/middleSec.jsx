import React, { useState } from 'react';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiRefreshCcw } from 'react-icons/fi';

const Middlesec = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className='bg-transparent max-w-[820px] absolute top-[80px] left-[260px] h-[screen]'>
        <div className='w-[98%] mx-auto mt-5 mb-5'>
          <div className='flex flex-col gap-y-6 border-b-[1px] pb-6 border-[#2563eb]'>
            <div className='flex flex-row gap-x-6'>
              <div className='flex flex-row gap-x-3'>
                <LiaFileInvoiceSolid size={20} className='fill-[#2563eb]' />
                <h5 className='text-[#2563eb] text-[14px]'>Invoice</h5>
              </div>
              <div className='flex flex-row gap-x-5'>
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className='fill-[#2563eb]'
                />
                <h5 className='text-[#8c95a1]'>New service invoice</h5>
              </div>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[#37383a] text-[22px] font-bold'>
                Invoice Details
              </h1>
              <p className='text-[#8c95a1] text-[14px] font-normal '>
                Enter the invoice detail below to start creating your invoice
              </p>
              <div className='grid grid-cols-2 gap-x-10'>
                <div className='w-[380px] border-[1px] border-[#8c95a1] rounded-lg mt-4'>
                  <div className='ml-4 flex flex-col gap-x-4 mt-[-12px] '>
                    <p className='text-[#8c95a1] text-[14px] font-normal px-2 w-[120px] bg-[#faf8fc]'>
                      Invoice Number
                    </p>
                    <p className='text-[#8c95a1] text-[14px] font-normal px-2 pb-3'>
                      INV-000001
                    </p>
                  </div>
                </div>
                <div className='w-[380px] border-[1px] border-[#8c95a1] rounded-lg mt-4'>
                  <div className='ml-4 flex flex-col gap-x-4 mt-[-12px] '>
                    <p className='text-[#8c95a1] text-[14px] font-normal px-2 w-[120px] bg-[#faf8fc]'>
                      Invoice Date
                    </p>
                    <div className=' flex flex-row justify-between text-[#8c95a1] text-[14px] font-normal px-2 pb-3'>
                      <DatePicker
                        className='bg-transparent'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <FaCalendar size={15} className='fill-[8c95a1]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-6'>
              <input
                type='text'
                placeholder='Invoice Title'
                className='w-full placeholder:text-[#8c95a1] py-2 text-[14px] placeholder:pl-4 placeholder:py-8 bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
              />
              <textarea
                type='text'
                placeholder='Invoice Description'
                className='w-full placeholder:text-[#8c95a1] py-2 placeholder:pl-4 placeholder:py-0 text-[14px] bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
              />
            </div>
            <div className='grid grid-cols-2 gap-x-10'>
              <div className='w-[380px] border-[1px] border-[#8c95a1] rounded-lg mt-4'>
                <div className='ml-4 flex flex-col gap-x-4 mt-[-12px] '>
                  <p className='text-[#8c95a1] text-[14px] font-normal px-2 w-[100px] bg-[#faf8fc]'>
                    Invoice Due
                  </p>
                  <p className='text-[#8c95a1] text-[14px] font-normal px-2 pb-3'>
                    Select when due
                  </p>
                </div>
              </div>
              <div className='w-[380px] border-[1px] border-[#8c95a1] rounded-lg mt-4'>
                <div className='ml-4'>
                  <div className=' flex flex-row justify-between text-[#8c95a1] text-[14px] font-normal px-2 py-3'>
                    <DatePicker
                      className='bg-transparent'
                      placeholderText='Due date'
                      onChange={(date) => setStartDate(date)}
                    />

                    <FaCalendar size={15} className='fill-[8c95a1]' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full border-[1px] border-[#8c95a1] rounded-lg mt-4'>
              <div className='ml-4 flex flex-col gap-x-4 mt-[-12px] '>
                <p className='text-[#8c95a1] text-[14px] font-normal px-2 w-[80px] bg-[#faf8fc]'>
                  Currency
                </p>
                <div className=' flex flex-row justify-between text-[#8c95a1] text-[14px] font-normal px-2 pb-3'>
                  <p>Select Preferred Currency </p>
                  <MdKeyboardArrowDown size={15} className='fill-[8c95a1]' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <div className='border-b-[1px] border-t-[1px]  border-[#8c95a1] pr-12'>
              <div className='flex flex-row justify-between py-3 '>
                <div>
                  <p className='text-[14px] text-[#8c95a1] font-medium'>
                    Item Detail
                  </p>
                </div>
                <div className='flex flex-row gap-x-14  justify-around text-[14px] text-[#8c95a1] font-medium'>
                  <p>Quantity</p>
                  <p>Unit Price</p>
                  <p>Amount</p>
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <div className='flex flex-row justify-between py-3 '>
                <div>
                  <input
                    type='text'
                    placeholder='Invoice Title'
                    className='w-[350px] placeholder:text-[#8c95a1] py-2 text-[14px] placeholder:pl-4 placeholder:py-8 bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
                  />
                </div>
                <div className='flex flex-row gap-x-4  justify-around text-[14px] text-[#8c95a1] font-medium'>
                  <input
                    type='text'
                    placeholder='0.00'
                    className='w-[100px] placeholder:text-[#8c95a1] py-2 text-[14px] placeholder:pl-4 placeholder:py-8 bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
                  />
                  <input
                    type='text'
                    placeholder='0.00'
                    className='w-[100px]  py-2 text-[14px] placeholder:pl-4 placeholder:py-8 bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
                  />
                  <input
                    type='text'
                    placeholder='0.00'
                    className='w-[100px] placeholder:text-[#8c95a1] py-2 text-[14px] placeholder:pl-4 placeholder:py-8 bg-transparent border-[1px] border-[#8c95a1] rounded-lg'
                  />
                </div>
              </div>
            </div>
            <div className='mt-6 flex flex-col gap-y-2'>
              <div className='border-b-[1px] border-[#2563eb] cursor-pointer '>
                <div className='flex flex-row gap-x-4 pb-8 '>
                  <AiOutlinePlus size={20} className='fill-[#2563eb]' />
                  <p className='font-medium text-[14px] text-[#2563eb]'>
                    Add another line item
                  </p>
                </div>
              </div>
              <div className='flex flex-row gap-x-16 justify-end mt-2'>
                <p className='text-[14px] text-[#8c95a1]'>Subtotal</p>
                <p className='text-[14px] text-[#8c95a1]'>0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white w-[840px] ml-[-3px]'>
          <div className='flex flex-row gap-x-3 py-5 px-2'>
            <FiRefreshCcw size={20} className='fill-[#2563eb]' />
            <p className='text-[14px] text-[#2563eb]'>Make recurring</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middlesec;
