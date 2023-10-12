import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Middlesec from '../components/Invoice/middleSec';
import Rightbar from '../components/Rightbar';

const Invoice = () => {
  return (
    <div className='max-w-[1240px] w-full mx-auto justify-center'>
      <Sidebar />
      <Topbar />
      <Middlesec />
      <Rightbar />
    </div>
  );
};

export default Invoice;
