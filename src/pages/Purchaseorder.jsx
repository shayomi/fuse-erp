import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Searchsort from '../components/Purchaseorder/Searchsort';
import Purchaseheader from '../components/Purchaseorder/Purchaseheader';

const Purchaseorder = () => {
  return (
    <div className='max-w-[1240px] w-full mx-auto justify-center'>
      <Sidebar />
      <Topbar />
      <Purchaseheader />
      <Searchsort />
    </div>
  );
};

export default Purchaseorder;
