import React from 'react';
import SchedulesPending from '../../components/schedule/SchedulesPending';

const Dashboard = () => {
  return (
    <div className='px-[5%] pt-4 w-full h-full overflow-y-auto'>
      <h1 className='text-3xl font-semibold mb-8'>Bem Vindo Cooperado!</h1>
      <SchedulesPending />
    </div>
  );
};

export default Dashboard;