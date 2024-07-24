import React, { useState } from 'react';
import PendingSchedulesTableItem from './tableItem/PendingSchedulesTableItem';
import FinishScheduleModal from '../schedule/modal/FinishScheduleModal';

const PendingSchedulesTable = ({ schedulesPending }) => {
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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
          <thead className="text-xs text-primary uppercase bg-[#F9FAFB]">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/5">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
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