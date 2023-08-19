import React from "react";
import about from "../../assets/About.png";

const Notion = () => {
  return (
      <div className="text-center px-[10rem]  flex flex-col sm:px-[1rem]  md:px-[2rem] relative">
        <h1 className="text-[5rem] font-normal text-[#111010] sm:text-[2rem] ">
          Code<span className="text-[#225AA5]">Vanta</span>
        </h1>

        <p className="text- font-normal pb-[2rem] text-[1.1rem] w-[45rem] sm:text-[1rem] mx-auto sm:w-[24rem] sm:pb-[4rem]">
          If your objective is to give your business the accessibility it
          deserves in today’s online/digital space, look no further than
          CODEVANTA! With close to 4 billion people accessing social media
          platforms, mobile apps and websites on à daily basis, CODEVANTA
          understands the need for your business to achieve greater visibility
          and competitiveness, to shore up operations and profitability. Whether
          you own an e-commerce concern, à logistics/haulage service or à
          fashion store; CODEVANTA provides customized services to meet your
          unique needs in reaching existing and potential clients with your
          service offerings!
        </p>   
        <div className="">
          <img
            src={about}
            alt=""
            className=" w-[45rem] z-10 left-[15rem] top-[24rem] sm:w-[20rem] sm:left-[2rem] sm:top-[22rem] md:left-[5rem] md:top-[24rem] md:w-[35rem] absolute pb-6"
          />
        </div>
      </div>
  );
};

export default Notion;
