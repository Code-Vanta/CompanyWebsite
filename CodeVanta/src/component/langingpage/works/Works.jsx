import React from "react";
import Button from "../../button/Button";

const Works = () => {
  return (
    <section id="WorksArea">
      <div className="px-[5rem] pt-2 sm:pt-1 pb-3 md:px-[1rem] sm:px-3">
        <p className="text-center font-bold text-[3rem] py-4">
          Our <span className="text-[#225AA5]">Works</span>
        </p>
        <div className="flex flex-col gap-6">
          <div className="lg:flex lg:flex-row flex flex-col gap-[3rem] lg:gap-[4rem] items-start">
            <div className="lg:w-[40%] w-full sm:text-center md:text-center">
              <h5 className="text-[#225AA5] font-normal text-[5rem] sm:text-[4.5rem]">BLOCKRIDE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quidem quibusdam! Fuga quidem dolorem porro, quam quasi dignissimos veniam nisi numquam recusandae error magnam in maxime deleniti obcaecati aliquam?
              Sequi, soluta quo ratione animi voluptas pariatur eveniet ducimus repudiandae commodi facere eos voluptatem nostrum alias nihil et? Voluptatum magnam, rerum pariatur ut minima aspernatur dolor? Eius facilis veniam suscipit!</p>
            </div>
            <div className="lg:w-[60%] w-full">
              <p className="font-semibold text-[11rem] leading-none lg:block hidden">
                BLOCK<br />RIDE.<span className="font-normal text-[5rem]">XYZ</span>
              </p>
              <a href="#" className="md:flex md:justify-center sm:flex sm:justify-center">  <Button 
                text = {'Visit Blockride'}
                style= 'bg-[#225AA5] rounded-r-full rounded-bl-full text-white py-2 px-2'
              /></a>
            </div>
          </div>
          <div className="lg:flex lg:flex-row flex flex-col gap-[3rem] lg:gap-[6rem] items-start ">
            <div className="w-full lg:w-[40%] sm:text-center md:text-center">
              <h5 className="text-[#225AA5] font-normal text-[7rem]">BUBBLE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quidem quibusdam! Fuga quidem dolorem porro, quam quasi dignissimos veniam nisi numquam recusandae error magnam in maxime deleniti obcaecati aliquam?
              Sequi, soluta quo ratione animi voluptas pariatur eveniet ducimus repudiandae commodi facere eos voluptatem nostrum alias nihil et? Voluptatum magnam, rerum pariatur ut minima aspernatur dolor? Eius facilis veniam suscipit!</p>
            </div>
            <div className="lg:w-[60%] w-full">
              <p className="font-semibold text-[11rem] leading-none lg:block hidden">
                BUBB<br />LE.<span className="font-normal text-[5rem]">COM</span>
              </p>
              <a href="#" className="md:flex md:justify-center sm:flex sm:justify-center">  <Button 
              text = {'Visit Bubble'}
              style= 'bg-[#225AA5] rounded-r-full rounded-bl-full text-white py-2 px-3'
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
