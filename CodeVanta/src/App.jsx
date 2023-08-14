import Footer from './component/footer/Footer'
import HeroH from './component/langingpage/heroHome/HeroH'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OurServices from './component/langingpage/servicess/OurServices'
import WhyChoose from './component/langingpage/why/WhyChoose'
import Works from './component/langingpage/works/Works'
import LayOut from './LayOut'
import ContactUs from './component/contact/ContactUs'
import Fallback from './component/fallback/Fallback'

function App() {

  return (
    <div>
      <Navbar />
      <HeroH />
      <Works />
      <WhyChoose />
      <OurServices />
      <Footer />
      <ContactUs />
      <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}></Route>
        <Route path='*' element={<Fallback />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
