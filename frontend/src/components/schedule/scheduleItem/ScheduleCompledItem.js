import classNames from 'classnames';
import React from 'react';

const ScheduleCompletedItem = ({ schedule }) => {


  return (
    <div className='flex justify-between items-center border mt-8 pb-4 flex-col bg-gray-50 w-72 h-64 rounded-2xl shadow-md'>
      <h3 className={classNames('text-xl font-medium text-center py-2 w-full text-white rounded-t-xl', {
        'bg-emerald-800': schedule.result === 'approved',
        'bg-red-800': schedule.result !== 'approved',
      })}>{schedule.schedule.title}</h3>
      <div className='text-right w-full pt-1 pr-2 text-gray-500 text-sm'>Finalizada em: <span className='font-semibold'>{schedule.schedule.date_end}</span></div>
      <div className='text-justify w-full py-4 px-2 h-full truncate text-wrap text-gray-00'>{schedule.schedule.description}</div>
      {schedule.result === 'approved' ? (
        <div className='bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg px-4 py-2 mt-4 duration-150 ease-in-out'>Aprovada</div>
      ) : (
        <div className='bg-red-800 hover:bg-red-900 text-white rounded-lg px-4 py-2 mt-4 duration-150 ease-in-out'>Não aceita</div>
      )}
    </div>
  );
};

export default ScheduleCompletedItem;