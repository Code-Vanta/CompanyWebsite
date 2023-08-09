import React from "react";
import about from '../../assets/About.png'

const Notion = () => {
  return (
    <div className="">
      <div className="text-center px-[10rem]  flex flex-col sm:px-1 md:px-[0.5rem] relative">
        <h1 className="text-[5rem] font-normal text-[#111010] sm:text-[3.5rem] ">
          Code<span className="text-[#225AA5]">Vanta</span>
        </h1>
        <p className="text-center font-normal pb-[2rem] text-[1.2rem] sm:text-[1rem] sm:pb-[6.7rem]">
          Even getting a link getting link from can be difficult (trust me I
          know .....I tried to offer this myself at one piont and it went
          poorly) and the rule with backlinks is generally, the more diificult
          is to obtain, the more valuable it is. Even getting a link getting link
          from can be difficult (trust me I know .....I tried to offer this
          myself at one piont and it went poorly) and the rule with backlinks is
          generally, the more diificult is to obtain, the more
        </p>
        <div className="">
          <img src={about} alt="" className=" w-[45rem] z-10 left-[15rem] top-[15.5rem] sm:w-[20rem] sm:left-[2rem] sm:top-[19rem] md:left-[5rem] md:top-[20rem] md:w-[35rem] absolute pb-6"/>
        </div>
      </div>
    </div>
  );
};

export default Notion;
