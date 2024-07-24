import React, { useEffect, useState } from 'react';
import FinishedSchedulesTable from '../../components/table/FinishedSchedulesTable';
import { ScheduleService } from '../../services/ScheduleService';
import { LoginControllerService } from '../../services/LoginControllerService';
import PendingSchedulesTable from '../../components/table/PendingSchedulesTable';

const Analysis = () => {

  const [schedulesPending, setSchedulesPending] = useState([]);
  const [schedulesCompleted, setSchedulesCompleted] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const [pendingResponse, completedResponse] = await Promise.all([
          ScheduleService.getSchedulesPending(),
          ScheduleService.getSchedulesCompleted()
        ]);

        if (pendingResponse === 500) {
          LoginControllerService.logoutUser();
          console.log('Erro ao buscar pautas pendentes');
        } else if (pendingResponse === 404) {
          console.log('Nenhuma pauta pendente encontrada');
        } else {
          setSchedulesPending(pendingResponse);
        }

        if (completedResponse === 500) {
          LoginControllerService.logoutUser();
          console.log('Erro ao buscar pautas concluídas');
        } else if (completedResponse === 404) {
          console.log('Nenhuma pauta concluída encontrada');
        } else {
          setSchedulesCompleted(completedResponse);
        }
      } catch (error) {
        console.error('Erro ao buscar pautas:', error);
      }
    };
    fetchSchedules();

  }, []);

  return (
    <div className='px-[5%] pt-4 w-full h-full overflow-y-auto'>
      <div className='bg-white  py-12 px-8 overflow-x-hidden rounded-xl h-full'>
        <h1 className='text-3xl font-semibold pb-8 '>Area de Administração:</h1>
        <h1 className='text-lg mb-2'>Pautas Pendentes:</h1>
        <PendingSchedulesTable schedulesPending={schedulesPending} />
        <h1 className='text-lg mb-2 pt-12'>Pautas Finalizadas:</h1>
        <FinishedSchedulesTable schedulesCompleted={schedulesCompleted} />
      </div>
    </div>
  );
};

export default Analysis;