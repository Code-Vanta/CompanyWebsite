import React from 'react'

const Card = ({image, name, position,link,linkAddress }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 '>
        <div className=''>
            <img src={image} alt="" className='w-[15rem] h-[15rem]  sm:w-[15rem] sm:h-[15rem] rounded-[3rem]' />
        </div>
        <div className=' flex flex-col items-center gap-1'>
            <p className='font-light text-[1.5rem]'>{name}</p>
            <p className='text-[1rem]'>{position}</p>
            <a href={linkAddress} className='bg-[#225AA5] text-white p-2 rounded-full font-light'>{link}</a>

        </div>
    </div>
  )
}

export default Card