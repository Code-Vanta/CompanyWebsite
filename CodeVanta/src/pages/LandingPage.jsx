import React from 'react'
import HeroH from '../component/langingpage/heroHome/HeroH';
import Works from '../component/langingpage/works/Works';
import WhyChoose from '../component/langingpage/why/WhyChoose';
import OurServices from '../component/langingpage/servicess/OurServices';
import GetReview from '../component/reviewss/GetReview';
import { useState,useEffect } from 'react';

const LandingPage = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   useEffect(() => {
     const popupTimeout = setTimeout(() => {
       setIsPopupOpen(true);
     }, 60000);

     return () => {
       clearTimeout(popupTimeout);
     };
   }, []);

   const closePopup = () => {
     setIsPopupOpen(false);
   };
  return (
    <div className="lg:pb-[3rem] sm:bg-slate-100 pb-7">
      <HeroH />
      <Works />
      <WhyChoose />
      <OurServices />
      <GetReview />
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
            <iframe
              title="Popup Form"
              width="540"
              height="305"
              src="https://d66ed512.sibforms.com/serve/MUIFAHPpt9Jutjfr_5anpboNtDELSwQU2vr274aWVuOmpqY_52ipok5pFBVU9jBQYhrXg9wU-HCgpAguYwiwqzvUMMN3rB7OBPTkPsXDKEl-LTA_CZFXeMqQepWbw04LW1xdQX7j3ea6BdRL4tArcbUK7Gmsr8EUNvpHLLAerqETO1x7bMCzqnUPQcb1eLH3qJoUOr7VnFw_wZIi"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
                border: "none",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage