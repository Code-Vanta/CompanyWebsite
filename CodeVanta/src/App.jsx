// import './App.css'
import Footer from './component/footer/Footer'
import HeroH from './component/heroHome/HeroH'
import Navbar from './component/navbar/Navbar'
import NewsLetter from './component/newsletter/NewsLetter'
import OurServices from './component/servicess/OurServices'
import WhyChoose from './component/why/WhyChoose'
import Works from './component/works/Works'

function App() {

  return (
    <div>
      <Navbar />
      <HeroH />
      <Works />
      <WhyChoose />
      <OurServices />
      <Footer />
    </div>
  )
}

export default App
