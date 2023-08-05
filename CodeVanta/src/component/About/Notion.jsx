import React from "react";
import about from '../../assets/About.png'

const Notion = () => {
  return (
    <div className="">
      <div className="text-center px-[10rem]  flex flex-col">
        <h1 className="text-[5rem] font-medium text-[#111010] ">
          Code<span className="text-[#225AA5]">Notion</span>
        </h1>
        <p className="text-center font-normal text-[1.2rem]">
          Even getting a link getting link from can be difficult (trust me I
          know .....I tried to offer this myself at one piont and it went
          poorly) and the rule with backlinks is generally, the more diificult
          is to obtain, the more valuable it is. Even getting a link getting link
          from can be difficult (trust me I know .....I tried to offer this
          myself at one piont and it went poorly) and the rule with backlinks is
          generally, the more diificult is to obtain, the more
        </p>
        <div className="w-[35rem]  py-[2rem] relative  m-auto">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notion;
