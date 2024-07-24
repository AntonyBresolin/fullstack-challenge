import React, { useEffect, useState } from 'react';
import SchedulesPending from '../../components/schedule/SchedulesPending';
import SchedulesCompleted from '../../components/schedule/SchedulesCompleted';
import VoteModal from '../../components/vote/VoteModal';
import VotationModal from '../../components/vote/VotationModal';
import { ScheduleService } from '../../services/ScheduleService';
import { LoginControllerService } from '../../services/LoginControllerService';

const Dashboard = () => {
  const [scheduleSelected, setScheduleSelected] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [schedulesPending, setSchedulesPending] = useState([]);
  const [schedulesCompleted, setSchedulesCompleted] = useState([]);

  const handleScheduleSelectedToVote = (schedule) => {
    setModalType('vote');
    setScheduleSelected(schedule);
  }

  const handleScheduleSelectedToVotation = () => {
    setModalType('votation');
  }

  const handleCloseModal = () => {
    setModalType(null);
    setScheduleSelected(null);
  }

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
    <>
      <div className='px-[5%] pt-4 w-full h-full overflow-y-auto' >
        <h1 className='text-3xl font-semibold mb-8'>Bem Vindo Cooperado!</h1>
        <div className='flex flex-col justify-between gap-y-10'>
          <SchedulesPending schedules={schedulesPending} scheduleSelected={handleScheduleSelectedToVote} />
          <SchedulesCompleted schedules={schedulesCompleted} />
        </div>
      </div>
      {modalType === 'vote' && (
        <div className='absolute top-0 right-0 w-screen h-screen'>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ' onClick={handleCloseModal}></div>
          <VoteModal schedule={scheduleSelected} closeModal={handleCloseModal} handleAccept={handleScheduleSelectedToVotation} />
        </div>
      )}
      {modalType === 'votation' && (
        <div className='absolute top-0 right-0 w-screen h-screen'>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ' onClick={handleCloseModal}></div>
          <VotationModal schedule={scheduleSelected} closeModal={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Dashboard;