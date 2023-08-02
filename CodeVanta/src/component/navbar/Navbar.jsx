import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/companyLogo.svg'

const Navbar = () => {
  return (
    <nav className='relative'>
        <div className='px-10 flex justify-between'>
            <div>
                <img src={logo} alt='Company Logo' className=''/>
            </div>
            <div className='flex gap-4 py-3 border-b-2 border-black sm:hidden'>
                <Link className='hover:text-[225AA5] hover:border-b-2 hover:border-[225AA5]'>About</Link>
                <Link className='hover:text-[225AA5] hover:border-b-2 hover:border-[225AA5]'>Contact</Link>
                <Link className='hover:text-[225AA5] hover:border-b-2 hover:border-[225AA5]'>Blog</Link>            
                <Link className='hover:text-[225AA5] hover:border-b-2 hover:border-[225AA5]'>Works</Link>            
                <Link className='hover:text-[225AA5] hover:border-b-2 hover:border-[225AA5]'>Services</Link>            
            </div>
            <div>
                <p className='text-[225AA5] font-normal'>Hello, you are welcome.</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar