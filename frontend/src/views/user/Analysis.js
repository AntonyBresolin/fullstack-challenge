import React, { useEffect, useState } from 'react';
import FinishedSchedulesTable from '../../components/table/FinishedSchedulesTable';
import { ScheduleService } from '../../services/ScheduleService';
import { LoginControllerService } from '../../services/LoginControllerService';
import PendingSchedulesTable from '../../components/table/PendingSchedulesTable';
import Swal from 'sweetalert2'

const Analysis = () => {
  const [schedulesPending, setSchedulesPending] = useState([]);
  const [schedulesCompleted, setSchedulesCompleted] = useState([]);
  const [pendingPage, setPendingPage] = useState(0);
  const [completedPage, setCompletedPage] = useState(0);
  const [size] = useState(10);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const [pendingResponse, completedResponse] = await Promise.all([
          ScheduleService.getSchedulesPending(pendingPage, size),
          ScheduleService.getSchedulesCompleted(completedPage, size)
        ]);

        if (pendingResponse === 401 || completedResponse === 401) {
          Swal.fire({
            title: 'Sessão expirada',
            text: 'Faça login novamente',
            icon: 'warning'
          });
          setTimeout(() => {
            LoginControllerService.logoutUser();
            window.location.reload();
          }, 1000);
        }

        if (pendingResponse.status === 500) {
          LoginControllerService.logoutUser();
          console.log('Erro ao buscar pautas pendentes');
        } else if (pendingResponse.status === 404) {
          console.log('Nenhuma pauta pendente encontrada');
        } else {
          setSchedulesPending(pendingResponse.content);
        }

        if (completedResponse.status === 500) {
          LoginControllerService.logoutUser();
          console.log('Erro ao buscar pautas concluídas');
        } else if (completedResponse.status === 404) {
          console.log('Nenhuma pauta concluída encontrada');
        } else {
          setSchedulesCompleted(completedResponse.content);
        }
      } catch (error) {
        console.error('Erro ao buscar pautas:', error);
      }
    };
    fetchSchedules();
  }, [pendingPage, completedPage, size]);

  return (
    <div className='px-[5%] pt-4 w-full h-full overflow-y-auto'>
      <div className='bg-white  py-12 px-8 overflow-x-hidden rounded-xl h-full'>
        <h1 className='text-3xl font-semibold pb-8 '>Area de Administração:</h1>
        <h1 className='text-lg mb-2'>Pautas Pendentes:</h1>
        <PendingSchedulesTable schedulesPending={schedulesPending} setPage={setPendingPage} />
        <h1 className='text-lg mb-2 pt-12'>Pautas Finalizadas:</h1>
        <FinishedSchedulesTable schedulesCompleted={schedulesCompleted} setPage={setCompletedPage} />
      </div>
    </div>
  );
};

export default Analysis;