// import './App.css'
import Footer from './component/footer/Footer'
import HeroH from './component/heroHome/HeroH'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FReviews from './component/reviewss/FReviews'
import OurServices from './component/servicess/OurServices'
import WhyChoose from './component/why/WhyChoose'
import Works from './component/works/Works'
import ReviewForm from './component/reviewss/ReviewForm'

function App() {

  return (
    <div>
      <Navbar />
      <HeroH />
      <Works />
      <WhyChoose />
      <OurServices />
      <FReviews />
      <ReviewForm />
      <Footer />
      <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
