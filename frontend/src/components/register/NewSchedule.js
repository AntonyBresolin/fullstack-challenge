import React from 'react';

const NewSchedule = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      dateEnd: e.target.dateEnd.value,
      votingTime: e.target.votingTime.value,
      active: e.target.active.checked,
    }

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex flex-col border-b-2 border-gray-100 py-4'>
        <div className='w-full mb-4'>
          <h2 className='text-xl font-semibold'>Título da Pauta</h2>
          <input
            type="text"
            name="title"
            placeholder='Digite o título da pauta'
            className="
              w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            "
            required
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl font-semibold'>Descrição</h2>
          <textarea
            name="description"
            placeholder='Digite a descrição da pauta (até 500 caracteres)'
            rows={6}
            className="
              w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            "
            maxLength="500"
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl font-semibold'>Tempo de Votação (segundos)</h2>
          <input
            type="number"
            name="votingTime"
            className="
              w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            "
            defaultValue="60"
            required
            min="1"
          />
        </div>
        <div className='w-full flex justify-end'>
          <button
            className='bg-green-700 text-white px-8 py-1 rounded-lg font-semibold hover:bg-green-800 duration-150 ease-in-out'
            type='submit'
          >
            Cadastrar Pauta
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSchedule;