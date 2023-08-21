import React from 'react'
import Kamal from '../../assets/kamal.jpg'
import johnson from '../../assets/johnson.jpg'
import Sekinat from '../../assets/sekinat.jpeg'
import Coletta from '../../assets/Coletta.jpeg'
import leke from '../../assets/leke.jpg'
import Card from '../card/Card'
import Ekene from '../../assets/Ekene.jpg'

const Team = () => {

    const datas = [
      {
        image: johnson,
        name: "Johnson Gabriel",
        position: "Founder/Team lead",
        linkAddress: "https://www.linkedin.com/in/johnson-gabriel-a802b2286",
        link: "Linkedin profile",
      },
      {
        image: Coletta,
        name: "Coletta Ezeagba",
        position: "Product Designer",
        linkAddress: "https://www.linkedin.com/in/coletta-ezeagba-a86a63147",
        link: "Linkedin profile",
      },
      {
        image: leke,
        name: "Leke Mogbonjubola",
        position: "Product Designer",
        linkAddress: "https://www.linkedin.com/in/leke-mogbonjubola-0062b517b/",
        link: "Linkedin profile",
      },
      {
        image: Kamal,
        name: "Kamalideen Omotosho",
        position: "Front-End Developer",
        linkAddress:
          "https://www.linkedin.com/in/kamalideen-omotosho-a50135270/",
        link: "Linkedin profile",
      },
      {
        image: Sekinat,
        name: "Sekinat Bashir",
        position: "Front-End Developer",
        linkAddress: "https://www.linkedin.com/in/bashir-sekinat-b01464219",
        link: "Linkedin profile",
      },
      {
        image: Ekene,
        name: "Ekene Eziagulu",
        position: "Content creator",
        link: "Linkedin profile",
      },
    ];

  return (
    
   <div className='px-[7rem] sm:px-[0.1rem] md:px-[0.5rem]'>
    <p className='text-[2rem] font-medium text-center'>Meet Our Team</p>
     <div className='grid grid-cols-2 py-[2rem] gap-[2rem] sm:grid-cols-1  ' >
       
       {
               datas.map((data,i)=>(<Card key={i} {...data} />  ))

       }

   </div>
   </div>
  )
}

export default Team