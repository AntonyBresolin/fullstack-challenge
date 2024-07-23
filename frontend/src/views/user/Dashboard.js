import React, { useEffect, useState } from 'react';
import SchedulesPending from '../../components/schedule/SchedulesPending';
import SchedulesCompleted from '../../components/schedule/SchedulesCompleted';
import VoteModal from '../../components/vote/VoteModal';
import VotationModal from '../../components/vote/VotationModal';
import { ScheduleService } from '../../services/ScheduleService';

const Dashboard = () => {
  const [scheduleSelected, setScheduleSelected] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [schedulesPending, setSchedulesPending] = useState([]);

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
    ScheduleService.getSchedulesPending().then(response => {
      if (response === 500) {
        console.log('Erro ao buscar pautas pendentes');
      } else if (response === 404) {
        console.log('Nenhuma pauta pendente encontrada');
      } else {
        setSchedulesPending(response);
      }
    }
    );
  }, []);

  const schedulesCompleted = [
    {
      total_votes: 100,
      votes_in_favor: 80,
      votes_against: 20,
      votes_invalid: 0,
      result: 'approved',
      schedule: {
        title: 'Titulo Pauta 1',
        date_end: '2021-09-01',
      }
    },
    {
      total_votes: 120,
      votes_in_favor: 25,
      votes_against: 90,
      votes_invalid: 5,
      result: 'disapproved',
      schedule: {
        title: 'Titulo Pauta 2',
        date_end: '2021-09-01',
      }
    },
    {
      total_votes: 150,
      votes_in_favor: 110,
      votes_against: 30,
      votes_invalid: 10,
      result: 'approved',
      schedule: {
        title: 'Titulo Pauta 3',
        date_end: '2021-09-01',
      }
    },
    {
      total_votes: 80,
      votes_in_favor: 50,
      votes_against: 25,
      votes_invalid: 5,
      result: 'approved',
      schedule: {
        title: 'Titulo Pauta 4',
        date_end: '2021-09-01',
      }
    }
  ];


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