import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from '../views/user/Dashboard';
import Topbar from '../components/navbar/Topbar';

const User = () => {
  return (
    <>
      <div className='h-screen w-screen flex overflow-hidden bg-white'>
        <Topbar />
        <div className='w-full mt-[61px] pb-4 bg-[#ededed]'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div >
      </div>
    </>
  );
};

export default User;