import React from 'react';
import ScheduleCompletedItem from './scheduleItem/ScheduleCompledItem';

const SchedulesCompleted = ({ schedules, setPage }) => {
  return (
    <div className='bg-white w-full max-w-full rounded-xl py-12 px-8 overflow-x-hidden'>
      <h1 className='text-2xl font-medium text-justify'>Pautas Finalizadas:</h1>
      <div className='flex flex-row w-full justify-between '>
        {console.log(schedules)}
        {schedules ? schedules.map((schedule) => (
          <ScheduleCompletedItem key={schedule.votingResultId} schedule={schedule} />
        )) : <p>Nenhuma pauta finalizada</p>}
      </div>
      <div className='float-right gap-x-2 flex mt-2'>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 0))} className='bg-gray-400 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-500 duration-150 ease-in-out'>Anterior</button>
        <button onClick={() => setPage(prev => prev + 1)} className='bg-gray-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-700 duration-150 ease-in-out'>Próximo</button>
      </div>
    </div>
  );
};

export default SchedulesCompleted;