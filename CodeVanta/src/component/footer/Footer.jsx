import React from "react";
import NewsLetter from "../langingpage/newsletter/NewsLetter";
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
          <div className="flex justify-around sm:flex sm:justify-start sm:gap-x-[6rem] sm:gap-y-7 p-3 sm:flex-wrap">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Navigations</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <Link to="/">Home</Link>
                <Link to="">About</Link>
                <Link to="/contactus">Contact</Link>
                <Link to="/blog">Blog</Link>
                <p>Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Legal</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Contact Us</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>contact@codevanta.tech</p>
                <p>+234 701 2340 590</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col-reverse lg:px-[4rem] md:px-[4rem] gap-[2rem] lg:gap-[16rem] items-center">
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
              <a href="">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
