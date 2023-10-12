import React, { useState } from 'react';
import { BiCheckbox } from 'react-icons/bi';
import { PurchaseData } from '../../data/Data';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaEllipsisH } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const PurchaseorderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const purchaseListPerPage = 10;
  const lastIndex = currentPage * purchaseListPerPage + purchaseListPerPage;
  const firstIndex = lastIndex - purchaseListPerPage;
  const purchaseList = PurchaseData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(PurchaseData.length / purchaseListPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className=' max-w-[1100px] w-full absolute  rounded-md items-center '>
      <div className='w-[96%] mx-auto border-[#faf8fc] border-[1px] bg-[#faf8fc] rounded-md'>
        <div className=' w-full grid grid-cols-9 justify-evenly h-[70px] gap-x-2 items-center px-2 py-auto '>
          <input type='checkbox' className='w-[15px] h-[15px]' />
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium   '>
              #Purchase Order
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>
              Date Created
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>
              Vendor Name
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>
              Expected Delivery Date
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>
              Purchase Order Amount
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>
              Outstanding Balance
            </p>
          </div>
          <div>
            <p className='text-[13px] text-[#8c95a1] font-medium  '>Status</p>
          </div>
          <BiCheckbox size={20} className='text-[#8c95a1] w-[20px]' />
        </div>

        {purchaseList.map((data) => {
          return (
            <div className='w-[full] border-[#faf8fc] border-[1px] bg-[#fff] rounded-md'>
              <div
                key={data.id}
                className='w-full grid grid-cols-9  gap-x-3 justify-evenly h-[100px] items-center   py-auto'>
                <input type='checkbox' className='w-[15px] h-[15px]' />
                <p className='text-[13px] text-[#2563eb] font-medium  '>
                  {data.purchaseorder}
                </p>
                <div className='flex flex-col gap-y-1  '>
                  <p className='text-[13px] text-[#8c95a1] font-normal  '>
                    {data.datecreated}
                  </p>
                  <p className='text-[13px] text-[#8c95a1] font-normal  '>
                    {data.timecreated}
                  </p>
                </div>
                <p className='text-[13px] text-[#8c95a1] font-normal '>
                  {data.vendorname}
                </p>
                <div className='flex flex-col gap-y-1  '>
                  <p className='text-[13px] text-[#8c95a1] font-normal '>
                    {data.deliverydate}
                  </p>
                  <p className='text-[13px] text-[#8c95a1] font-normal '>
                    {data.timedelired}
                  </p>
                </div>
                <span className='flex flex-row gap-x-1 items-center'>
                  <TbCurrencyNaira size={25} />
                  <p className='text-[13px] text-[#8c95a1] font-normal  '>
                    {data.purchaseamout}
                  </p>
                </span>

                <span className='flex flex-row gap-x-1 items-center  '>
                  <TbCurrencyNaira size={25} />
                  <p className='text-[13px] text-[#8c95a1] font-normal '>
                    {data.outstandingbalance}
                  </p>
                </span>

                <span className='flex flex-row  items-center'>
                  {data.icon}
                  <p className='text-[13px] text-[#8c95a1] font-normal '>
                    {data.status}
                  </p>
                </span>

                <FaEllipsisH size={20} className='fill-[#8c95a1]' />
              </div>
            </div>
          );
        })}
      </div>
      <nav className='bg-white ml-5'>
        <div className='flex flex-row justify-between h-[80px] items-center mx-6'>
          <ul className='flex flex-row gap-x-2 cursor-pointer text-[#8c95a1] text-[14px] font-medium items-center'>
            <p>Page 1 of 3</p>
            <li className='px-2 py-2 bg-[#d2d6db] rounded-md hover:bg-[#2563eb] hover:text-white ease-in-out duration-500'>
              <a onClick={prevPage}>
                <MdKeyboardArrowLeft />
              </a>
            </li>

            <li className='px-2 py-2 bg-[#d2d6db] rounded-md hover:bg-[#2563eb] hover:text-white ease-in-out duration-500'>
              <a onClick={nextPage}>
                <MdKeyboardArrowRight />
              </a>
            </li>
          </ul>
          <ul className='flex flex-row gap-x-3'>
            <p className=' text-[#8c95a1] text-[14px] font-medium py-1'>Show</p>
            <div className='border-[1px] border-[#8c95a1] rounded-md cursor-pointer'>
              <div className='py-1 px-4 flex flex-row gap-x-2 cursor-pointer items-center'>
                <p className='text-[#8c95a1] text-[14px] font-medium '>
                  10 rows
                </p>
                <MdKeyboardArrowDown size={15} className='text-[#8c95a1]' />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PurchaseorderList;
