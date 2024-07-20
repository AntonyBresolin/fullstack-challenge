
import React from 'react';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

const HomePage = () => {
  return (
    <div className='flex justify-between items-center h-screen w-screen overflow-y-hidden'>
      <div className='w-3/5'>
        <img
          className='bg-cover h-full w-full'
          src={require("../../assets/images/bglogin.png")}
          alt='background' />
        <div className='bg-gradient-to-t from-emerald-800 to-transparent absolute top-0 left-0 h-full w-3/5 opacity-60'>
        </div>
        <div className='absolute top-0 left-0 w-3/5 h-full flex items-end px-[5%]'>
          <h1 className='2xl:text-3xl xl:text-2xl text-white font-medium  pb-24 text-justify'>Acompanhe a contagem dos votos das pautas e participe da votação</h1>
        </div>
      </div>
      <div className='w-2/5  h-full'>
        <LoginComponent />
      </div>
    </div>
  );
};

export default HomePage;