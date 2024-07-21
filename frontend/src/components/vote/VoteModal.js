import React from 'react';

const VoteModal = ({ schedule, closeModal, handleAccept }) => {

  return (
    <div className='bg-white pb-4 overflow-auto top-1/2 left-1/2 absolute transform z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg px-12 py-4 max-w-[30vw] max-h-[50vh]'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Votar na pauta</h1>
        <h2 className='text-xl font-semibold text-emerald-600 text-center'>{schedule.title}</h2>
        <p className='text-gray-500 text-center pt-4'>Você tem certeza que deseja votar na pauta?</p>
        <p className='text-gray-400 text-center pb-4'>Você terá apenas <span className='font-semibold'>{schedule.votingTime} segundos </span> para realizar a votação.</p>
        <div className='flex justify-between w-full'>
          <button onClick={() => { closeModal() }} className='bg-red-700 hover:bg-red-600 text-white rounded-lg px-8 py-2 mt-4 duration-150 ease-in-out'>não</button>
          <button onClick={() => { handleAccept() }} className='bg-green-700 hover:bg-green-600 text-white rounded-lg px-8 py-2 mt-4 duration-150 ease-in-out'>Sim</button>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;