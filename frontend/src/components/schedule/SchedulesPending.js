import React from 'react';
import ScheduleVoteItem from './scheduleItem/ScheduleVoteItem';

const SchedulesPending = ({ schedules, scheduleSelected }) => {

  return (
    <div className='bg-white w-full max-w-full rounded-xl py-12 px-8 overflow-x-hidden'>
      <h1 className='text-2xl font-medium text-justify'>Pautas Pendentes:</h1>
      <div className='flex flex-row w-full justify-between '>
        {schedules ? schedules.map((schedule, index) => (
          <ScheduleVoteItem key={index} schedule={schedule} scheduleSelected={scheduleSelected}  />
        )) : <p>Nenhuma pauta pendente</p>}
      </div>
      <div className='float-right gap-x-2 flex mt-2'>
        <button className='bg-gray-400 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-500 duration-150 ease-in-out'>Anterior</button>
        <button className='bg-gray-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-700 duration-150 ease-in-out'>Próximo</button>
      </div>
    </div>
  );
};

export default SchedulesPending;
