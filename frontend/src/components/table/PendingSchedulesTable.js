import React, { useState } from 'react';
import PendingSchedulesTableItem from './tableItem/PendingSchedulesTableItem';
import FinishScheduleModal from '../schedule/modal/FinishScheduleModal';

const PendingSchedulesTable = ({ schedulesPending, setPage }) => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const onSelectSchedule = (schedule) => {
    setSelectedSchedule(schedule);
  }

  const onSelectModal = (modal) => {
    setShowModal(modal);
  }

  const onCloseModal = () => {
    setShowModal(null);
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
          <thead className="text-xs text-primary uppercase bg-[#F9FAFB]">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/5">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3 w-1/5 hidden md:table-cell">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3 w-1/5 hidden md:table-cell">
                Tempo de votação (segundos)
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                Data de criação
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
              </th>
            </tr>
          </thead>
          <tbody>
            {schedulesPending ? schedulesPending.map((schedule) => (
              <PendingSchedulesTableItem
                key={schedule.scheduleId}
                schedule={schedule}
                onSelectSchedule={onSelectSchedule}
                onChooseModal={onSelectModal}
              />
            )) : <tr><td colSpan="6" className="text-center py-4">Nenhuma pauta pendente listada</td></tr>}
          </tbody>
        </table>
      </div>
      <div className='float-right gap-x-2 flex mt-2'>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 0))} className='bg-gray-400 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-500 duration-150 ease-in-out'>Anterior</button>
        <button onClick={() => setPage(prev => prev + 1)} className='bg-gray-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-gray-700 duration-150 ease-in-out'>Próximo</button>
      </div>
      {showModal === "endSchedule" && (
        <div className='absolute top-0 right-0 w-screen h-screen'>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ' onClick={onCloseModal}></div>
          <FinishScheduleModal selectedSchedule={selectedSchedule} onClose={onCloseModal} />
        </div>
      )}
    </div>
  );
};

export default PendingSchedulesTable;