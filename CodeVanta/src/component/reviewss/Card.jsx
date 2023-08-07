import React from 'react'
import StarRatings from './StarRatings'

const Card = ({image, Name, org, review}) => {
  return (
    <div className='rounded-[2.5rem] bg-[#E6f5fb] p-3'>
        <div className='flex gap-4'>
            <div className='w-[10rem] h-[10rem]'>
                <img src={image}/>
            </div>
            <div>
                <div>
                    <p className='font-medium text-[1.2rem]'>{Name}</p>
                    <p className='font-medium'>{org}</p>
                </div>
                <div><StarRatings /></div>
                <div>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card