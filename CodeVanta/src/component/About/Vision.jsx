import React from "react";

const Vision = () => {
  return (
    <div className="py-[3rem] px-[10rem]  flex flex-col gap-[3.5rem] sm:px-1 md:px-[3rem]">
      <div className="relative">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#225AA5] absolute bottom-[11rem] left-[-1rem] sm:w-[3rem] sm:h-[3rem] sm:bottom-[13.5rem] sm:left-[-1px] md:bottom-[14rem] md:left-[-15px]"></div>
        <div className="bg-[#E6F5FB]  rounded-3xl  px-[1.5rem] py-[2.5rem] ">
          <p className="text-[2rem] font-medium sm:text-[1.5rem]">Our Vision</p>
          <p className="text-[1.3rem]  sm:text-[1rem]">
            Even getting a link from Wikipedia can be difficult (trust me I
            know... I tried to offer this myself at one point and it went
            poorly) and the rule with backlinks is generally, the more difficult
            it is to obtain, the more valuable it is.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#225AA5] absolute bottom-[11rem] left-[-1rem] sm:w-[3rem] sm:h-[3rem] sm:bottom-[13.5rem] sm:left-[-1px] md:bottom-[14rem] md:left-[-15px]"></div>
        <div className="bg-[#E6F5FB]  rounded-3xl  px-[1.5rem] py-[2.5rem] h-[] sm:h-[] ">
          <p className="text-[2rem] font-medium sm:text-[1.5rem] ">Our Mission</p>
          <p className="text-[1.3rem]  sm:text-[1rem]">
            Even getting a link from Wikipedia can be difficult (trust me I
            know... I tried to offer this myself at one point and it went
            poorly) and the rule with backlinks is generally, the more difficult
            it is to obtain, the more valuable it is.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Vision;
