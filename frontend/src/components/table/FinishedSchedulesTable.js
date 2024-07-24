import React from 'react';
import FinishedSchedulesTableItem from './tableItem/FinishedSchedulesTableItem';

const FinishedSchedulesTable = ({ schedulesCompleted, setPage }) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md w-full">
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
      <div className='float-right gap-x-2 flex mt-2'>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 0))} className='bg-gray-400 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-500 duration-150 ease-in-out'>Anterior</button>
        <button onClick={() => setPage(prev => prev + 1)} className='bg-gray-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-700 duration-150 ease-in-out'>Próximo</button>
      </div>
    </div>
  );
};

export default FinishedSchedulesTable;