import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {FiX} from 'react-icons/fi'
import {useState} from 'react'
import logo from '../../assets/companyLogo.svg'

const Navbar = () => {
    const[toggle, setToggle] = useState(false)
    const letToggle = () => {
    setToggle(!toggle)
    }
  return (
    <nav className='relative'>
        <div className='sm:px-0 px-10 flex justify-between items-center '>
            <div className={toggle ? "hidden" : 'block mr-8' }>
                <img src={logo} alt='Company Logo' className='w-[8rem] h-[7.5rem]'/>
            </div>
            <div className='hidden sm:block md: absolute right-[2rem] top-[2.5rem]' onClick={letToggle}>
                {toggle ? <FiX size={28} className='text-white'/> : <FiMenu size={28} className='text-[#225AA5]'/>}
            </div>
            <div className={toggle ? 'h-screen w-full items-center pt-[2rem] text-white flex flex-col gap-[2rem] bg-[#225AA5]' : 'flex gap-4 py-3 border-b-4 sm:hidden'}>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>About</p>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Contact</p>
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Blog</p>            
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Works</p>            
                <p className='hover:text-[#225AA5] hover:border-b-2 hover:border-[#225AA5]'>Services</p>            
            </div>
            <div className='sm:hidden'>
                <p className='text-[#225AA5] font-normal sm:hidden'>Hello, you are welcome.</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar