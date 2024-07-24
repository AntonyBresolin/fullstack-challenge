import React, { useState } from 'react';
import classNames from 'classnames';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddchartIcon from '@mui/icons-material/Addchart';
import HelpIcon from '@mui/icons-material/Help';
//import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ open }) => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  }

  return (
    <div className={classNames('bg-[#fff] absolute z-10 md:sticky left-0 top-0 h-screen  shadow-md ease-in-out duration-150 select-none', {
      'w-0 md:w-[78px]': open,
      "w-1/2 md:w-1/5": !open
    })}>
      <nav className='flex flex-col pt-[61px] justify-between h-full'>
        <div className='flex flex-col items-center px-2 py-2'>
          <NavLink to={'/user/dashboard'} className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl  font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-emerald-800 text-white': selected === 0,
            'text-emerald-800': selected !== 0,
            'hidden md:block': open,
          })} onClick={() => handleSelected(0)}>
            <DashboardIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-white': selected === 0,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Dashboard</span>
          </NavLink>
          {localStorage.getItem("role") === 'ADMIN' &&
            <NavLink to={"/user/register"} className={classNames(
              'w-full flex items-center py-4 px-4 rounded-2xl font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
              'bg-emerald-800 text-white': selected === 1,
              'text-emerald-800': selected !== 1,
              'hidden md:block': open,
            })} onClick={() => handleSelected(1)}>
              <PersonAddIcon fontSize='' className={classNames(
                'text-3xl', {
                'text-white': selected === 1,
              })} />
              <span className={classNames('ml-3', {
                'hidden': open,
              })}>Registros</span>
            </NavLink>}
          {localStorage.getItem("role") === 'ADMIN' &&
            <NavLink to={"/user/analysis"} className={classNames(
              'w-full flex items-center py-4 px-4 rounded-2xl font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
              'bg-emerald-800 text-white': selected === 2,
              'text-emerald-800': selected !== 2,
              'hidden md:block': open,
            })}
              onClick={() => handleSelected(2)}>
              <AddchartIcon fontSize='' className={classNames(
                'text-3xl', {
                'text-white': selected === 2,
              })} />
              <span className={classNames('ml-3', {
                'hidden': open,
              })}>Análises</span>
            </NavLink>}

          {/* <NavLink to={"/user/configuration"}  className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-emerald-800 text-white': selected === 3,
            'text-emerald-800': selected !== 3,
          })}
            onClick={() => handleSelected(3)}>
            <SettingsIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-white': selected === 3,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Configurações</span>
          </NavLink> */}
        </div>
        <div>
          <hr></hr>
          <div className={classNames('text-[#98A2B3] text-center py-4 hover:text-gray-600 ease-in-out duration-150 cursor-pointer', {
            'hidden md:block': open
          })}>
            <HelpIcon fontSize='' className='text-xl mr-2' />
            <span className={classNames('', { 'hidden': open })}>Ajuda</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;