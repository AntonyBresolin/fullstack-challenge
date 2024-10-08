import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import Sidebar from "./Sidebar";
import classNames from "classnames";
import { LoginControllerService } from "../../services/LoginControllerService";


const Topbar = () => {
  const [open, setOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();


  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDropdown = () => {
    setDropdown(!dropdown);
  }

  const handleLogout = () => {
    LoginControllerService.logoutUser()
    navigate('/');
  }


  return (
    <>
      <Sidebar open={open} />
      <nav className="bg-[#fff] px-4 select-none w-full shadow-sm fixed top-0 z-10 flex justify-between items-center">
        <div onClick={handleOpen}>
          <MenuIcon fontSize="" className="text-3xl text-black cursor-pointer hover:text-emerald-800 ml-[8px] duration-150 ease-in-out" />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center py-2 ">
            <div className={classNames("flex items-center justify-center mr-4 cursor-pointer text-primary w-64 duration-150 ease-in-out", {
              'bg-emerald-700 text-white rounded-t-md': dropdown,
              'hover:text-slate-600': !dropdown,
            })} onClick={() => handleDropdown()}>
              <div className="flex flex-col text-center mr-2">
                <h2 className="font-bold text-xl mb-0 pb-0 capitalize">{localStorage.getItem("userLogged") ? localStorage.getItem("userLogged") : "Cooperado"}</h2>
                <p className="text-secondary italic text-xs	mt-0 pt-0 capitalize">We Solutions</p>
              </div>
              <AccountCircleIcon fontSize="" className="text-[45px] " />
            </div>
          </div>
          <div className={`absolute mt-[60px] right-8 bg-[#fff] ${dropdown ? "block" : "hidden"} rounded-b-lg shadow-lg `}>
            <ul className="text-green-700">
              <div onClick={() => { handleLogout() }} to="/" className="cursor-pointer p-2 w-64  select-none flex items-center hover:bg-slate-100 ">
                <LogoutIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Sair</span>
              </div>
            </ul>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Topbar;