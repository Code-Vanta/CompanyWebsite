import React from "react";
import about from "../../assets/About.png";

const Notion = () => {
  return (
    <div className="text-center px-[7rem] sm:text-start flex flex-col sm:px-[0.2rem] md:px-[1rem] relative">
      <h1 className="text-[5rem] sm:text-center font-normal text-[#111010] sm:text-[2rem] ">
        About <span className="text-[#225AA5]">Us</span>
      </h1>
      <p className="text- font-normal pb-[2rem] text-[1.1rem] w-full sm:text-[1rem] mx-auto sm:pb-[4rem]">
        If your objective is to give your business the accessibility it deserves
        in today’s online/digital space, look no further than CODEVANTA! With
        close to 4 billion people accessing social media platforms, mobile apps
        and websites on a daily basis, CODEVANTA understands the need for your
        business to achieve greater visibility and competitiveness, to shore up
        operations and profitability. Whether you own an e-commerce concern, a
        logistics/haulage service or a fashion store; CODEVANTA provides
        customized services to meet your unique needs in reaching existing and
        potential clients with your service offerings!
      </p>
      <div className="">
        <img
          src={about}
          alt=""
          className=" w-[45rem] z-10 left-[24rem] top-[19rem] sm:w-[20rem] sm:left-[2rem] sm:top-[26rem] md:left-[5rem] md:top-[24rem] md:w-[35rem] absolute pb-6"
        />
      </div>
    </div>
  );
};

export default Notion;
