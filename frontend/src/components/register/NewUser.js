import React from 'react';
import Swal from 'sweetalert2'
import { UserService } from '../../services/UserService';
import { generateCPF, isValidCPF } from '../../utils/cpfUtils';

const NewUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      cpf: e.target.cpf.value,
      password: e.target.password.value
    }

    if (!isValidCPF(data.cpf)) {
      Swal.fire({
        title: "Erro",
        text: "CPF inválido!",
        icon: "error"
      });
      return;
    }

    UserService.registerUser(data).then(response => {
      if (response === 200) {
        Swal.fire({
          title: "Sucesso!",
          text: "Usuário Cadastrado com sucesso!",
          icon: "success"
        });
      } else if (response === 404) {
        Swal.fire({
          title: "Erro!",
          text: "Usuário não autorizado para votação em pautas!",
          icon: "warning"
        });
      } else if( response === 422) {
        Swal.fire({
          title: "Erro!",
          text: "CPF já cadastrado!",
          icon: "error"
        });
      }
      else {
        Swal.fire({
          title: "Erro!",
          text: "Erro ao cadastrar usuário!",
          icon: "error"
        });
      }
    })
  }

  const handleGenerateCPF = () => {
    const cpf = generateCPF();
    document.getElementById("cpf").value = cpf;
  };


  return (
    <form onSubmit={handleSubmit} >
      <div className='w-full flex flex-col md:flex-row justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>CPF</h2>
          <p className='text-secondary'>Esse nome será exibido no seu perfil.</p>
        </div>
        <div className='w-full'>
          <input type="number" name="cpf" id="cpf" placeholder='Digite o cpf do colaborador' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full flex items-center justify-center'>
          <span onClick={handleGenerateCPF} className='text-sky-500 text-center uppercase cursor-pointer  hover:text-sky-600 font-semibold'> gerar cpf válido </span>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Insira a senha:</h2>
        </div>
        <div className='w-full'>
          <input type="password" name="password" id="password" placeholder='Digite sua senha atual' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full'></div>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between border-b-2 border-gray-100 py-16 '>
        <div>
          <h2 className='text-xl font-semibold'>Cadastrar um novo cooperado</h2>
          <p className='text-secondary'>Preencha as informações para cadastrar um novo usuário</p>
        </div>
        <div className='flex items-center'>
          <button className='bg-green-700 text-white px-8 py-1 rounded-lg font-semibold hover:bg-green-800 duration-150 ease-in-out' type='submit'>Cadastrar</button>
        </div>
      </div>
    </form>
  );
};

export default NewUser;