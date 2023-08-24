import React from "react";
import logo from '../../assets/companyLogo.svg'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-[4rem] pt-4 sm:pt-2 pb-2 md:px-[0.3rem] sm:px-3">
        <div>
          <div className="flex justify-between sm:flex sm:justify-evenly sm:gap-x-[2rem] sm:gap-y-7 p-3 sm:">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium text-[1.5rem]">Navigations</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <Link to="/">Home</Link>
                <Link to="">About</Link>
                <Link to="/contactus">Contact</Link>
                <Link to="/blog">Blog</Link>
                <p>Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium text-[1.5rem]">Contact Us</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>contact@codevanta.tech</p>
                <p>+234 8148 3271 29</p>
                <a>Facebook</a>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col-reverse lg:px-[4rem] lg:justify-between sm:py-6 md:px-[4rem] gap-[2rem] sm:justify-center items-center">
            <div className="w-[6rem] h-[6rem] sm:hidden">
              <img src={logo} className="bg-black" />
            </div>
            <p className="flex gap-1 items-center">
              &#169; CodeVanta.All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/97924121/">
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
