import React from 'react'
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer'

const LayOut = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayOut