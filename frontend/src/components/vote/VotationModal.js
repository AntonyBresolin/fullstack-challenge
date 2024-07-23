import React, { useState, useEffect, useCallback } from 'react';
import { VoteService } from '../../services/VoteService';
import Swal from 'sweetalert2'


const VotationModal = ({ schedule, closeModal }) => {
  const [timeLeft, setTimeLeft] = useState(schedule.votingTime);
  const [timeNow] = useState(new Date());

  const handleVote = useCallback((option) => {
    const vote = {
      voteStartTime: timeNow.toISOString(),
      voteEndTime: new Date().toISOString(),
      value: option,
      schedule: {
        scheduleId: schedule.scheduleId
      }
    }
    VoteService.createVote(vote).then(response => {
      if (response === 200) {
        Swal.fire({
          title: "Sucesso!",
          text: "Voto realizado com sucesso!",
          icon: "success"
        })
      } else {
        Swal.fire({
          title: "Erro!",
          text: "Erro ao realizar voto!",
          icon: "error"
        });
      }
    });
    closeModal();
  }, [closeModal, schedule.scheduleId, timeNow]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleVote("INVALID");
    }
  }, [timeLeft, handleVote]);

  return (
    <div className='bg-white pb-4 overflow-auto top-1/2 left-1/2 absolute transform z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg px-12 py-4 w-[80vw] h-[80vh]'>
      <div className='w-full h-full flex flex-col justify-between items-center'>
        <div className='w-full'>
          <h1 className='text-2xl font-semibold bg-emerald-700 w-full text-center py-4 px-2 mb-2 text-white'>{schedule.title}</h1>
          <h2 className='text-xl font-semibold text-red-600 text-center'>Tempo restante: {timeLeft}s </h2>
        </div>
        <p className='text-gray-500 h-full w-full text-justify bg-gray-50 px-12 py-4'>{schedule.description}</p>
        <div className='flex justify-between w-full'>
          <button onClick={() => { handleVote("NO") }} className='bg-red-700 hover:bg-red-600 text-white rounded-lg px-8 py-2 mt-4 duration-150 ease-in-out'>NÃO APROVO</button>
          <button onClick={() => { handleVote("YES") }} className='bg-green-700 hover:bg-green-600 text-white rounded-lg px-8 py-2 mt-4 duration-150 ease-in-out uppercase'>aprovar</button>
        </div>
      </div>
    </div>
  );
};

export default VotationModal;
