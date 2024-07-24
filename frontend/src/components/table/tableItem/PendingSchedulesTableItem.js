import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';


const PendingSchedulesTableItem = ({ schedule, onSelectSchedule, onChooseModal }) => {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="py-4 px-6">
        <span className='h align-middle inline-block text-primary font-semibold truncate'> {schedule.title} </span>
      </td>
      <td className="px-6 table-cell truncate">
        {schedule.description}
      </td>
      <td className="px-6 table-cell">
        {schedule.votingTime}
      </td>
      <td className="px-6 table-cell">
        {formatTimestamp(schedule.createdAt)}
      </td>
      <td className="px-6 table-cell">
        <div className='flex justify-end items-center gap-x-2'>
          <div
            className='bg-gray-400 rounded-full text-white p-1 cursor-pointer hover:bg-gray-500 duration-150 ease-in-out'><SearchIcon /></div>
          <div
            className='bg-green-700 rounded-full text-white p-1 cursor-pointer hover:bg-green-800 duration-150 ease-in-out'
            onClick={() => { onSelectSchedule(schedule); onChooseModal("endSchedule") }}
          ><CheckIcon /></div>
        </div>
      </td>
    </tr>
  );
};

export default PendingSchedulesTableItem;