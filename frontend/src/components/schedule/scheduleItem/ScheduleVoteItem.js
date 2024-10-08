import React from 'react';

const ScheduleVoteItem = ({ schedule, scheduleSelected }) => {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }

  return (
    <div className='flex justify-between items-center border mt-8 pb-4 flex-col bg-gray-50 w-72 h-64 rounded-2xl shadow-md'>
      <h3 className='truncate text-xl font-medium text-center bg-gray-500 py-2 px-3 w-full text-white rounded-t-xl text-nowrap min-h-10 '>{schedule.title}</h3>
      <div className='text-right w-full pt-1 pr-2 text-gray-500 text-sm'>{formatTimestamp(schedule.createdAt)}</div>
      <div className='text-justify w-full py-4 px-2 h-full truncate text-wrap text-gray-00'>{schedule.description}</div>
      <button onClick={() => { scheduleSelected(schedule) }} className='bg-gray-700 hover:bg-gray-800 text-white rounded-lg px-4 py-2 mt-4 duration-150 ease-in-out'>Votar</button>
    </div>
  );
};

export default ScheduleVoteItem;