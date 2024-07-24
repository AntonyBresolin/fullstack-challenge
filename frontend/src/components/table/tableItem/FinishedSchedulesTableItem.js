import React from 'react';


const FinishedSchedulesTableItem = ({ title, totalVotes, totalVotesInFavor, totalVotesAgainst, totalInvalidVotes }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="py-2">
        <div className='bg-defaultBg w-12 h-12 rounded-full inline-block align-middle mr-2'></div>
        <span className='align-middle inline-block text-primary font-semibold'> {title} </span>
      </td>
      <td className="px-6">
        {totalVotes}
      </td>
      <td className="px-6">
        {totalVotesInFavor}
      </td>
      <td className="px-6">
        {totalVotesAgainst}
      </td>
      <td className="px-6">
        {totalInvalidVotes}
      </td>
    </tr>
  );
};

export default FinishedSchedulesTableItem;