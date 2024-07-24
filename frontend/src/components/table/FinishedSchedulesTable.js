import React from 'react';
import FinishedSchedulesTableItem from './tableItem/FinishedSchedulesTableItem';

const FinishedSchedulesTable = ({ schedulesCompleted }) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md w-full">
        <div className="pb-4 bg-white float-right px-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-3 ml-2">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search" className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Pesquise a pauta desejada" />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-primary uppercase bg-[#F9FAFB]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3">
                Total de votos
              </th>
              <th scope="col" className="px-6 py-3">
                Votos a favor
              </th>
              <th scope="col" className="px-6 py-3">
                Votos contra
              </th>
              <th scope="col" className="px-6 py-3">
                Votos inválidos
              </th>
            </tr>
          </thead>
          <tbody>
            {schedulesCompleted ? schedulesCompleted.map((schedule) => (
              <FinishedSchedulesTableItem
                key={schedule.votingResultId}
                title={schedule.schedule.title}
                totalVotes={schedule.totalVotes}
                totalVotesInFavor={schedule.totalVotesInFavor}
                totalVotesAgainst={schedule.totalVotesAgainst}
                totalInvalidVotes={schedule.totalInvalidVotes} />
            )) : <tr><td colSpan="6" className="text-center py-4">Nenhuma pauta finalizada listada</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinishedSchedulesTable;