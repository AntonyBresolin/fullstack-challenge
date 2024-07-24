import React from 'react';
import { ScheduleService } from '../../../services/ScheduleService';
import Swal from 'sweetalert2'

const FinishScheduleModal = ({ selectedSchedule, onClose }) => {

  const finalizeSelectedSchedule = (e) => {
    e.preventDefault();
    ScheduleService.finalizeSchedule(selectedSchedule.scheduleId).then(response => {
      if (response === 200) {
        Swal.fire({
          title: "Sucesso!",
          text: "Pauta finalizada com sucesso!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Erro!",
          text: "Erro ao finalizar pauta!",
          icon: "error"
        });
      }
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
  }

  return (
    <div className='w-[80vw] md:w-[40vw] h-[60vh] md:h-[40vh] bg-white flex flex-col top-1/2 left-1/2 absolute transform z-50 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-t-xl'>
      <h1 className='text-2xl font-medium text-center py-4 bg-gray-300 w-full rounded-t-xl px-12'>Deseja realmente finalizar a pauta selecionada?</h1>
      <div className='flex flex-col justify-between h-full px-12 py-6'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl font-bold text-center py-4'>Pauta: {selectedSchedule.title}</h2>
            <p className='text-center text-gray-400 text-xl'> Essa ação não pode ser desfeita</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <button onClick={onClose} className='bg-red-600 hover:bg-red-700  text-white rounded-lg px-4 py-2 mt-4 duration-150 ease-in-out font-bold'>Cancelar</button>
          <button onClick={finalizeSelectedSchedule} className='bg-emerald-600 hover:bg-green-800 text-white rounded-lg px-4 py-2 mt-4 duration-150 ease-in-out'>Finalizar</button>
        </div>
      </div>
    </div>
  );
};

export default FinishScheduleModal;