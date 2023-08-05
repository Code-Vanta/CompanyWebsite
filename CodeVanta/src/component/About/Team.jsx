import React from 'react'
import imageOne from '../../assets/img1.png'
import imageTwo from '../../assets/img2.png'
// import imageThree from '../../assets/img3.png'
import imageFour from '../../assets/img4.png'
import Card from '../card/Card'

const Team = () => {

    const datas=[
        {
            image : imageOne,
            name: "Johnson Jacobs",
            position: "founder/Team lead",
            link:"Linkedin profile"

        },
        {
            image : imageTwo,
            name: "Esther Beatrice",
            position: "Product Designer",
            link:"Linkedin profile"

        },
        {
            image : imageTwo,
            name: "Coletta Ezeagba",
            position: "Software Engineer",
            link:"Linkedin profile"

        },
        {
            image : imageFour,
            name: "Ngozi Iyke",
            position: "Data Analyst",
            link:"Linkedin profile"

        },
        {
            image : imageFour,
            name: "Coletta Ezeagba",
            position: "Software Engineer",
            link:"Linkedin profile"

        },
        {
            image : imageFour,
            name: "Ngozi Iyke",
            position: "Data Analyst",
            link:"Linkedin profile"

        },
    ]

  return (
    
   <div className='px-[10rem]'>
    <p className='text-[2rem] font-semibold'>Meet Our Team</p>
     <div className='grid grid-cols-2 py-[2rem] gap-y-[1.5rem]' >
       
       {
               datas.map((data,i)=>(<Card key={i} {...data} />  ))

       }

   </div>
   </div>
  )
}

export default Team