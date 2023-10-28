import React from 'react'
import logo from "../assets/mainstack-logo.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between shadow border-2 border-white rounded-full h-16 items-center'>
      <div>
        <img src={logo} alt="Mainstack Logo" />
      </div>

    </div>
  )
}

export default Navbar