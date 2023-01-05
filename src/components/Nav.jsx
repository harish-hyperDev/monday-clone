import React from 'react'
import logo from '../assets/crm-logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  return (
    <nav className='h-[100vh] bg-[rgb(43,43,63)] text-white text-center flex flex-col justify-between'>
      <div className='p-5 flex flex-col'>
        <img src={logo} alt="logo" className='w-5' />
      </div>
      <div>
        <div onClick={() => navigate('/ticket')}>+</div>
        <div onClick={() => navigate('/')}>))</div>
      </div>
    </nav>
  )
}

export default Nav