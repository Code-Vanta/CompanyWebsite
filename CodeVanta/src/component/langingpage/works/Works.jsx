import React from "react";
import Button from "../../button/Button";

const Works = () => {
  return (
    <section id="WorksArea">
      <div className="px-[5rem] pt-2 sm:pt-1 pb-3 md:px-[1rem] sm:px-3">
        <p className="text-center font-bold text-[3rem] py-4">
          Our <span className="text-[#225AA5]">Works</span>
        </p>
        <div className="">
          <div className="lg:flex lg:flex-row flex flex-col gap-[3rem] lg:gap-[4rem] items-start">
            <div className="lg:w-[40%] w-full sm:text-center md:text-center">
              <h5 className="text-[#225AA5] font-normal text-[4rem] sm:text-[3.5rem]">
                BLOCKRIDE
              </h5>
              <p>
                Blockride provides a stress free approach to vehicle financing
                in this changing times, it provides people to have fractional
                ownership as a form of shared ownership to a fleet. Their main
                aim is to provide a hassle free approach for investment in the
                transportation sector while allowing their investors to earn
                real returns.
              </p>
            </div>
            <div className="lg:w-[60%] w-full">
              <p className="font-semibold text-[11rem] leading-none lg:block hidden">
                BLOCK
                <br />
                RIDE.<span className="font-normal text-[5rem]">XYZ</span>
              </p>
              <a
                href="https://www.blockride.xyz"
                className="md:flex md:justify-center sm:flex sm:justify-center"
              >
                {" "}
                <Button
                  text={"Visit Blockride"}
                  style="bg-[#225AA5] rounded-r-full rounded-bl-full text-white py-2 px-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
