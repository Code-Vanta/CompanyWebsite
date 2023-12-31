import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {FiX} from 'react-icons/fi'
import {useState} from 'react'
import logo from '../../assets/companyLogo.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[toggle, setToggle] = useState(false)
    const letToggle = () => {
    setToggle(!toggle)
    }
    function handleItemClick(){
      setToggle(false)
    }
  return (
    <nav className="relative">
      <div className="sm:px-0 px-10 flex justify-between items-center md:px-2">
        <div className={toggle ? "hidden" : "block mr-8"}>
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="w-[8rem] h-[7.5rem]"
            />
          </Link>
        </div>
        <div
          className="hidden sm:block md:block absolute md:right-[6rem] right-[2rem] top-[2.5rem]"
          onClick={letToggle}
        >
          {toggle ? (
            <FiX size={30} className="text-white" />
          ) : (
            <FiMenu size={30} className="text-[#225AA5]" />
          )}
        </div>
        <div
          className={
            toggle
              ? "h-screen w-full pt-[6rem] ease-out px-8 text-white flex flex-col gap-[2rem] bg-[#225AA5]"
              : "flex gap-[4rem] py-3 border-b-4 md:hidden sm:hidden"
          }
        >
          <Link to="/about"
            onClick={handleItemClick}
            className="hover:text-[#225AA5] cursor-pointer hover:border-b-2 hover:border-[#225AA5]"
          >
            About
          </Link>
          <Link
            to="/contactus"
            onClick={handleItemClick}
            className="hover:text-[#225AA5] cursor-pointer hover:border-b-2 hover:border-[#225AA5]"
          >
            Contact
          </Link>
          <Link to='/blog'
            onClick={handleItemClick}
            className="hover:text-[#225AA5] cursor-pointer hover:border-b-2 hover:border-[#225AA5]"
          >
            Blog
          </Link>
          <a
            href="/#WorksArea"
            onClick={handleItemClick}
            className="hover:text-[#225AA5] cursor-pointer hover:border-b-2 hover:border-[#225AA5]"
          >
            Works
          </a>
          <Link to="/services"
            onClick={handleItemClick}
            className="lg:hover:text-[#225AA5] lg:hover:border-b-2 lg:hover:border-[#225AA5]"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar