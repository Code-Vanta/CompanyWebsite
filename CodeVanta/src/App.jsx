import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./LayOut";
import ContactUs from "./component/contact/ContactUs";
import Fallback from "./component/fallback/Fallback";
import PostReview from "./component/reviewss/PostReview";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="contactus" element={<Contact />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
