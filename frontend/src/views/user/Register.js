import React, { useState } from 'react';
import NewUser from '../../components/register/NewUser';
import NewSchedule from '../../components/register/NewSchedule';
import classNames from 'classnames';

const Register = () => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  }
  return (
    <div className='px-[5%] pt-4 w-full h-full overflow-y-auto'>
      <div className='bg-white  py-12 px-8 overflow-x-hidden rounded-xl h-full'>
        <h1 className='text-3xl font-semibold mb-8 '>Cadastros</h1>
        <ul className='flex items-center px-4 text-secondary'>
          <li className={classNames("px-8 cursor-pointer  ease-in-out", {
            'text-emerald-800 font-bold border-b-2 border-emerald-800': selected === 0,
          })} onClick={() => handleSelected(0)}>Novo usuário</li>
          <li className={classNames("px-8 cursor-pointer ease-in-out", {
            'text-emerald-800 font-bold border-b-2 border-emerald-800': selected === 1,
          })} onClick={() => handleSelected(1)}>Nova Pauta</li>
        </ul>
        <div className='w-full  mt-4 flex flex-col px-8'>
          {selected === 0 && <NewUser />}
          {selected === 1 && <NewSchedule />}
        </div>
      </div>
    </div>
  );
};

export default Register;