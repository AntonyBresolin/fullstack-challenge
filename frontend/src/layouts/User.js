import React from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from '../views/user/Dashboard';
import Topbar from '../components/navbar/Topbar';
import Register from '../views/user/Register';
import Analysis from '../views/user/Analysis';

const User = () => {
  return (
    <>
      <div className='h-screen w-screen flex overflow-hidden bg-white'>
        <Topbar />
        <div className='w-full mt-[61px] pb-4 bg-[#ededed]'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
          <Outlet />
        </div >
      </div>
    </>
  );
};

export default User;