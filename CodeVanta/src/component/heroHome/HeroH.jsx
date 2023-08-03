import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/heroImg.png'
import Button from '../button/Button'
import { CiSearch } from 'react-icons/ci'


const HeroH = () => {
  return (
    <section className=''>
        <div className='px-[5rem] pt-4 pb-6 flex gap-[2rem]'>
            <div>
                <p>Let's Empower Your Brand.</p>
                <p></p>
                    <Button 
                    text = {'Free Consultation'}
                    style= 'bg-[#225AA5] rounded-r-full text-white py-2 px-2'
                    />
            </div>
            <div>
              <img src={image} alt=''/>
            </div>
        </div>
        <div className='flex justify-center'>
          <div className="mx-[5rem] mt-4 mb-6 px-4 w-[30rem] flex justify-between items-center rounded-full border-[1px] border-black">
            <input type='text' 
            placeholder='Search for services...' 
            className="border-none rounded-full w-[90%] h-[] p-2 outline-none"
            />
            <CiSearch className="text-gray-700"/>
          </div>
        </div>
    </section>
  )
}

export default HeroH