
// import Navbar from "./component/navbar/Navbar"

import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./LayOut";
import Fallback from "./component/fallback/Fallback";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import Service from "./pages/Service";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="blog" element={<BlogPage />}/>
            <Route path="about" element={<About />}/>
            <Route path="services" element={<Service />}/>
          </Route>
          <Route path="contactus" element={<Contact />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
