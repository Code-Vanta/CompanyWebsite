import React from "react";

const Vision = () => {
  return (
    <div className="py-[3rem] px-[10rem]  flex flex-col gap-[3.5rem]">
      <div className="relative">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#225AA5] absolute bottom-[11rem] left-[-1rem] "></div>
        <div className="bg-[#E6F5FB]  rounded-3xl  p-[1.5rem] h-[13rem] ">
          <p className="text-[2rem]">Our Vision</p>
          <p className="text-[1.4rem]">
            Even getting a link from Wikipedia can be difficult (trust me I
            know... I tried to offer this myself at one point and it went
            poorly) and the rule with backlinks is generally, the more difficult
            it is to obtain, the more valuable it is.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#225AA5] absolute bottom-[11rem] left-[-1rem] "></div>
        <div className="bg-[#E6F5FB]  rounded-3xl  p-[1.5rem] h-[13rem] ">
          <p className="text-[2rem]">Our Mission</p>
          <p className="text-[1.4rem]">
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
