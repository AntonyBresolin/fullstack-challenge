import React from 'react';
import ScheduleCompletedItem from './scheduleItem/ScheduleCompledItem';

const SchedulesCompleted = ({ schedules }) => {
  return (
    <div className='bg-white w-full max-w-full rounded-xl py-12 px-8 overflow-x-hidden'>
      <h1 className='text-2xl font-medium text-justify'>Pautas Finalizadas:</h1>
      <div className='flex flex-row w-full justify-between '>
        {schedules.map((schedule, index) => (
          <ScheduleCompletedItem key={index} schedule={schedule} />
        ))}
      </div>
      <div className='float-right gap-x-2 flex mt-2'>
        <button className='bg-red-800 text-white px-4 py-2 rounded-xl mt-4 hover:bg-red-900 duration-150 ease-in-out'>Anterior</button>
        <button className='bg-emerald-800 text-white px-4 py-2 rounded-xl mt-4 hover:bg-emerald-900 duration-150 ease-in-out'>Próximo</button>
      </div>
    </div>
  );
};

export default SchedulesCompleted;