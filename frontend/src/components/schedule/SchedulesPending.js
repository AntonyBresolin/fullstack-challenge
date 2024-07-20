import React from 'react';
import ScheduleVoteItem from './scheduleItem/ScheduleVoteItem';

const SchedulesPending = () => {

  const schedules = [
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

  return (
    <div className='bg-white w-full max-w-full rounded-xl py-12 px-8 overflow-x-hidden'>
      <h1 className='text-2xl font-medium text-justify'>Pautas Pendentes:</h1>
      <div className='flex flex-row w-full justify-between '>
        {schedules.map((schedule, index) => (
          <ScheduleVoteItem key={index} schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default SchedulesPending;
