import React from 'react'

const ServiceTwo = () => {
  return (
    <div className="pt-2 sm:pt- sm:pb-4 pb-2 flex flex-col gap-8">
      <div className="text-center px-[4rem] md:px-[0.3rem] sm:px-3">
        <div className="text-center flex flex-col gap-2 ">
          <p className="text-[4rem] text-[#225AA5] font-normal sm:text-[2rem] ">
            SERVICES
          </p>
          <p className="text-[1.8rem] sm:text-[1.2rem] ">
            At CodeVanta, we are dedicated to providing you with exceptional
            services that cater to your unique needs
          </p>
        </div>
      </div>
      <div className="service flex flex-col gap-4 px-[4rem] md:px-[0.3rem] sm:px-3">
        <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6]">
          <div className="flex pl-[2.2rem] pt-[1rem] gap-5 sm:pt-[1.1rem] sm:pl-[2.2rem] sm:gap-4">
            <span className="font-bold">
              <p className="text-[1.3rem] sm:text-[1.25rem]">01</p>
            </span>
            <span className="flex flex-col gap-2 sm:gap-1">
              <p className="w-[9rem] font-bold text-[1.3rem] leading-tight sm:text-[1.2rem]">
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
        <div className="flex justify-end">
          <div className="rounded-full bg-[#029CD6] w-[12.5rem] h-[12.5rem]">
            <div className="flex gap-4 justify-end pr-10 pt-3">
              <div className="">
                <h6 className="font-bold text-[1.3rem] justify-between text-end ">
                  Branding
                </h6>
                <p className="w-[26rem] text-[1rem] text-end sm:w-[19rem]">
                  It is important to ensure your business remains active within
                  the consciousness of your clients. CodeVanta can you capture
                  the essence of your Unique Selling Point and project it via
                  customised logos and themes, unique to your enterprise.
                </p>
              </div>
              <p className="text-[1.3rem] font-bold">02</p>
            </div>
          </div>
        </div>
        <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6] ">
          <div className="flex pl-[3.2rem] sm:pt-[1rem] pt-[0.3rem] gap-5">
            <span className="font-bold">
              <p className="text-[1.3rem]">03</p>
            </span>
            <span className="flex flex-col gap-2">
              <p className="w-[5rem] leading-tight font-bold text-[1.3rem] ">
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
        <div className="flex justify-end">
          <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6]">
            <div className="flex justify-end pr-10 pt-3 gap-4">
              <div className="w-[25rem] sm:">
                <h6 className="w-[rem] font-bold text-[1.3rem] justify-between text-end ">
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
        </div>
        <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-[#029CD6]">
          <div className="flex pl-[2.2rem] sm:pt-[1rem] pt-[1rem] gap-4">
            <span className="font-bold">
              <p className="text-[1.3rem]">05</p>
            </span>
            <span className="flex flex-col gap-2">
              <p className="w-[11rem] font-bold leading-tight text-[1.3rem]">
                Consulting & Advisory Services
              </p>
              <p className="w-[25rem] text-[0.9rem] sm:w-[19rem]">
                Your business can take advantage of CODEVANTA’s dedicated team
                of expert guides and strategic consultants.Their insights,
                gleaned from several years of industry experience, will help you
                navigate technological challenges, optimize operations and
                attain profitability.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTwo