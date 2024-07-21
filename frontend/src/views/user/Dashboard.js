import React from 'react';
import SchedulesPending from '../../components/schedule/SchedulesPending';
import SchedulesCompleted from '../../components/schedule/SchedulesCompleted';

const Dashboard = () => {
  const schedulesPending = [
    {
      title: 'Titulo Pauta 1',
      description: 'ASNFALSKFN LASMDLKASMDLK ASMKLDMASKL DMASKL DMASKLMD LAKSMDLKASMD LKASMD LKASMD LKASMDLKASMDKLASDMKLSADMASLKDMALSK MDLK MDLKMASLKD MALKS DMLKASMDLK ASMDLK A',
      created_at: '2021-09-01',
    },
    {
      title: 'Capacitação de Cooperados',
      description: 'A importancia de se ter um bom café da manhã',
      created_at: '2021-09-01',
    },
    {
      title: 'Devemos comprar uma cafeteira?',
      description: 'Vamos discutir a necessidade de se ter uma cafeteira na empresa',
      created_at: '2021-09-10',
    },
    {
      title: 'Devemos comprar uma cafeteira?',
      description: 'Vamos discutir a necessidade de se ter uma cafeteira na empresa',
      created_at: '2021-09-10',
    }
  ];

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
    <div className='px-[5%] pt-4 w-full h-full overflow-y-auto' >
      <h1 className='text-3xl font-semibold mb-8'>Bem Vindo Cooperado!</h1>
      <div className='flex flex-col justify-between gap-y-10'>
        <SchedulesPending schedules={schedulesPending} />
        <SchedulesCompleted schedules={schedulesCompleted} />
      </div>
    </div >
  );
};

export default Dashboard;