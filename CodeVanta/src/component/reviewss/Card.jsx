import React from 'react'

const Card = ({image, Name, org, rating, review}) => {
  return (
    <div className='bg-card bg-no-repeat bg-cover p-3'>
        <div>
            <div>
                <img src={image}/>
            </div>
            <div>
                <div>
                    <p>{Name}</p>
                    <p>{org}</p>
                </div>
                <div>{rating}</div>
                <div>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card