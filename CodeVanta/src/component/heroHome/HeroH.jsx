import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/heroImg.png'
import Button from '../button/Button'
import { CiSearch } from 'react-icons/ci'


const HeroH = () => {
  return (
    <section>
        <div className='px-8 pt-4 pb-6 flex gap-[2rem]'>
            <div>
                <p>Let's Empower Your Brand.</p>
                <p></p>
                <Link>
                    <Button 
                    text = {'Free Consultation'}
                    style= 'bg-[225AA5] rounded-r-full rounded-bl-xl py-2 px-2'
                    />
                </Link>
            </div>
            <div>
              <img src={image} alt=''/>
            </div>
        </div>
        <div className="flex items-center rounded-full border-[1px] border-black">
          <input type='text' 
          placeholder='Search for services...' 
          className="border-none rounded-full w-[15rem] h-[3rem] p-2 outline-none"
          />
          <CiSearch className="text-gray-200"/>
        </div>
    </section>
  )
}

export default HeroH