import React from "react";

const Service = () => {
  return (
    <div className="pb-[1.5rem]">
      <div className="px-[3rem] sm:px-3">
        <div className="text-center flex flex-col gap-2 ">
          <p className="text-[4rem] text-[#225AA5] font-normal sm:text-[2rem] ">
            SERVICES
          </p>
          <p className="text-[1.8rem] sm:text-[1.2rem] ">
            At CodeVanta, we are dedicated to providing you with exceptional
            services that cater to your unique needs
          </p>
        </div>
        <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6] mt-[2.5rem]">
          <div className="flex pl-[3.5rem] pt-[2rem] gap-5 sm:pt-[1.1rem] sm:pl-[2.2rem] sm:gap-4">
            <span className="font-bold">
              <p className="text-[1.3rem] sm:text-[1.25rem]">01</p>
            </span>
            <span className="flex flex-col gap-2 sm:gap-1">
              <p className="w-[9rem] font-bold text-[1.3rem]  sm:text-[1.2rem]">
                Web Design and Development{" "}
              </p>
              <p className="w-[25rem] text-[1rem]  sm:w-[19rem] ">
                CodeVanta's team of tech-savvy professionals can improve the
                reach and accessibility of your business with the provision of
                interactive web platforms and sites to help your business have
                larger reach.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="service py-[7rem] sm:py-[3.5rem] md:py-[3rem] px-[3rem] sm:px-3 ">
        <div className=" ">
          <div className="">
            <div className="flex  w-[12.5rem] h-[12.5rem] ml-[58rem] relative md:ml-[30rem] rounded-full bg-[#029CD6] sm:ml-[12rem]  "></div>
            <div className="flex  gap-x-[1rem] ml-[38rem] md:ml-[12rem] sm:ml-[1.5rem] md:top-[38rem] sm:top-[36rem] absolute top-[43rem]">
              <div className="w-[25rem] sm:w-full">
                <h6 className="w-[5rem] font-bold text-[1.3rem] sm:w-[2rem] sm:ml-[14rem] ml-[20rem]  justify-between text-end ">
                  Branding
                </h6>
                <p className="w-[25rem] text-[1rem] text-end  sm:w-[19rem]">
                  It is important to ensure your business remains active within
                  the consciousness of your clients. CodeVanta can you capture
                  the essence of your Unique Selling Point and project it via
                  customised logos and themes, unique to your enterprise.
                </p>
              </div>
              <p className="text-[1.3rem] font-bold">02</p>
            </div>
          </div>

          <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6] ">
            <div className="flex pl-[3.5rem] sm:pt-[1rem] pt-[2rem] gap-5">
              <span className="font-bold">
                <p className="text-[1.3rem]">03</p>
              </span>
              <span className="flex flex-col gap-3">
                <p className="w-[5rem] font-bold text-[1.3rem] ">
                  Product Design
                </p>
                <p className="w-[25rem] text-[1rem]  sm:w-[15rem]">
                  Our team of expert product designers can help create fantastic
                  and eye-catching interface for your business websites and
                  application
                </p>
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex  w-[12.5rem] h-[12.5rem] ml-[58rem] md:ml-[30rem] relative rounded-full bg-[#029CD6] sm:ml-[12rem]  "></div>
            <div className="flex  gap-x-[1rem] ml-[38rem] sm:ml-[5rem] md:ml-[13rem] sm:top-[60.7rem] md:top-[63.5rem] absolute top-[68.5rem]">
              <div className="w-[25rem] sm:w-full">
                <h6 className="w-[9rem] font-bold text-[1.3rem] sm:ml-[6rem] ml-[16rem]  justify-between text-end ">
                  App Design and Development
                </h6>
                <p className="w-[25rem] text-[1rem] text-end  sm:w-[15rem]">
                  at CodeVanta our experienced and innovative developers can
                  improve your business reach by creating fantastic applications
                  for your business.
                </p>
              </div>
              <p className="text-[1.3rem] font-bold">04</p>
            </div>
          </div>

          <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6]">
            <div className="flex pl-[3.5rem] sm:pt-[1rem] pt-[2rem] gap-5 ">
              <span className="font-bold">
                <p className="text-[1.3rem]">05</p>
              </span>
              <span className="flex flex-col gap-3">
                <p className="w-[11rem] font-bold text-[1.3rem]">
                  Consulting & Advisory Services
                </p>
                <p className="w-[25rem] text-[0.9rem] sm:w-[18rem]">
                  Your business can take advantage of CODEVANTA’s dedicated team
                  of expert guides and strategic consultants.Their insights,
                  gleaned from several years of industry experience, will help
                  you navigate technological challenges, optimize operations and
                  attain profitability.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service