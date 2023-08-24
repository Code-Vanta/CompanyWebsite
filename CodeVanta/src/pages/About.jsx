import React from 'react'
import Notion from '../component/About/Notion'
import Value from '../component/About/Value'
import  Vision  from '../component/About/Vision'
import Team from '../component/About/Team'

const About = () => {
  return (
    <div className=''>
      <Notion/>
      <Value/>
      <Vision/>
      <Team/>
    </div>
  )
}

export default About