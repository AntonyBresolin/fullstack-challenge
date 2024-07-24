import React, { useEffect, useRef, useState } from 'react';
import SchedulesPending from '../../components/schedule/SchedulesPending';
import SchedulesCompleted from '../../components/schedule/SchedulesCompleted';
import VoteModal from '../../components/vote/VoteModal';
import VotationModal from '../../components/vote/VotationModal';
import { ScheduleService } from '../../services/ScheduleService';
import { LoginControllerService } from '../../services/LoginControllerService';
import Swal from 'sweetalert2'


const Dashboard = () => {
  const [scheduleSelected, setScheduleSelected] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [schedulesPending, setSchedulesPending] = useState([]);
  const [schedulesCompleted, setSchedulesCompleted] = useState([]);
  const [size, setSize] = useState(1);
  const [pendingPage, setPendingPage] = useState(0);
  const [completedPage, setCompletedPage] = useState(0);
  const parentRef = useRef(null);

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

  const fetchSchedules = async (pendingPage, completedPage, size) => {
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

  useEffect(() => {
    fetchSchedules(pendingPage, completedPage, size);
  }, [pendingPage, completedPage, size]);

  useEffect(() => {
    const calculateSize = () => {
      if (parentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        const itemWidth = 288;
        const calculatedSize = Math.floor((parentWidth-64) / itemWidth);
        setSize(calculatedSize);
      }
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);

    return () => {
      window.removeEventListener('resize', calculateSize);
    };
  }, []);

  return (
    <>
      <div ref={parentRef} className='px-[5%] pt-4 w-full h-full overflow-y-auto'>
        <h1 className='text-3xl font-semibold mb-8'>Bem Vindo Cooperado!</h1>
        <div className='flex flex-col justify-between gap-y-10'>
          <SchedulesPending schedules={schedulesPending} scheduleSelected={handleScheduleSelectedToVote} setPage={setPendingPage} />
          <SchedulesCompleted schedules={schedulesCompleted} setPage={setCompletedPage} />
        </div>
      </div>
      {modalType === 'vote' && (
        <div className='absolute top-0 right-0 w-screen h-screen'>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50' onClick={handleCloseModal}></div>
          <VoteModal schedule={scheduleSelected} closeModal={handleCloseModal} handleAccept={handleScheduleSelectedToVotation} />
        </div>
      )}
      {modalType === 'votation' && (
        <div className='absolute top-0 right-0 w-screen h-screen'>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50' onClick={handleCloseModal}></div>
          <VotationModal schedule={scheduleSelected} closeModal={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Dashboard;