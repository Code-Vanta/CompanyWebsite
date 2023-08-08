import React from 'react'

const Card = ({image, name, position,link }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 '>
        <div className=''>
            <img src={image} alt="" className='w-[20rem] h-[20rem]  sm:w-[15rem] sm:h-[15rem] ' />
        </div>
        <div className=' flex flex-col items-center gap-1'>
            <p className='font-semibold text-[1.5rem]'>{name}</p>
            <p className='text-[1rem]'>{position}</p>
            <a href="" className='bg-[#225AA5] text-white p-2 rounded-full font-semibold'>{link}</a>

        </div>
    </div>
  )
}

export default Card