import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
  }
  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between" style={{ backgroundColor: 'green' }}>
  <Link to={"/"} className="text-3xl font-semibold font-Montesarrat" style={{ color: 'white' }}>
    Altius International Hospital
  </Link>  
        <div className="flex">
        <Link to={"/add-user"} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" style={{ backgroundColor: 'black', color: 'white' }}>New Pasien</Link>
        <Link to={'/login'} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-red hover:shadow-md rounded-lg ml-3 font-bold py-2 px-2" style={{ backgroundColor: 'black', color: 'white' }} onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;



