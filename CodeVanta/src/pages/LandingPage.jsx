import React from 'react'
import HeroH from '../component/langingpage/heroHome/HeroH';
import Works from '../component/langingpage/works/Works';
import WhyChoose from '../component/langingpage/why/WhyChoose';
import OurServices from '../component/langingpage/servicess/OurServices';
import GetReview from '../component/reviewss/GetReview';

const LandingPage = () => {
  return (
    <div className="lg:pb-[3rem] sm:bg-slate-100 pb-7">
      <HeroH />
      <Works />
      <WhyChoose />
      <OurServices />
      <GetReview />
    </div>
  );
}

export default LandingPage