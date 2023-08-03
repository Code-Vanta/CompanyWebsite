import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/companyLogo.svg'

const Navbar = () => {
  return (
    <nav className='relative'>
        <div className='px-10 flex justify-between items-center'>
            <div>
                <img src={logo} alt='Company Logo' className='w-[8rem] h-[7.5rem]'/>
            </div>
            <div className='flex gap-4 py-3 border-b-4 sm:hidden'>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>About</p>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Contact</p>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Blog</p>            
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Works</p>            
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Services</p>            
            </div>
            <div>
                <p className='text-[#225AA5] font-normal'>Hello, you are welcome.</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar