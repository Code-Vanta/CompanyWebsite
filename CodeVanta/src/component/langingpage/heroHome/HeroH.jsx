import React from 'react'
import image from '../../../assets/heroImg.png'
import Button from '../../button/Button'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'


const HeroH = () => {
  return (
    <section className="">
      <div className="px-[5rem] sm:pt-1 pt-2 pb-3 flex gap-[5.5rem] md:flex md:flex-col-reverse items-center md:px-[1rem] sm:bg-smbg sm:px-2">
        <div className="lg:w-[51%] flex flex-col items-center lg:block w-full  sm:text-[#225AA5] sm:p-3">
          <p className="font-semibold leading-tight text-[5rem] sm:font-medium sm:text-[3rem] md:font-medium md:text-[4rem] text-center lg:text-start">
            Let's Empower Your Brand
          </p>
          <p className="py-[1.5rem] sm:font-medium">
            At CodeVanta, we are dedicated to providing essential services that
            meet the needs of both individuals and businesses. We strive to
            leverage on cutting-edge technology and innovative solutions to
            create a seamless experience for our customers. With a strong focus
            on delivering quality services, we aim to become a trusted partner
            in enhancing productivity and enabling growth.
          </p>
          <Link to="/contactus">
            <Button
              text={"Free Consultation"}
              style="bg-[#225AA5] rounded-r-full rounded-bl-full text-white py-2 px-2"
            />
          </Link>
        </div>
        <div className="sm:hidden">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-[5rem] my-3 px-4 w-[30rem] sm:bg-slate-100 flex justify-between items-center rounded-full border-[1px] border-black">
          <input
            type="text"
            placeholder="Search for services..."
            className="border-none rounded-full w-[90%] p-2 sm:bg-slate-100 outline-none"
          />
          <CiSearch className="text-gray-700" />
        </div>
      </div>
    </section>
  );
}

export default HeroH