import React from "react";

const Works = () => {
  return (
    <section>
      <div className="px-[5rem] pt-4 sm:pt-1 pb-6 md:px-[1rem] sm:px-3">
        <p className="text-center font-semibold text-[3rem] py-4">
          Our <span className="text-[#225AA5]">Works</span>
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex gap-[5rem] items-center">
            <div className="w-[40%]">
              <h5 className="text-[#225AA5] font-normal text-[7rem]">BLOCKRIDE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quidem quibusdam! Fuga quidem dolorem porro, quam quasi dignissimos veniam nisi numquam recusandae error magnam in maxime deleniti obcaecati aliquam?
              Sequi, soluta quo ratione animi voluptas pariatur eveniet ducimus repudiandae commodi facere eos voluptatem nostrum alias nihil et? Voluptatum magnam, rerum pariatur ut minima aspernatur dolor? Eius facilis veniam suscipit!</p>
            </div>
            <p>
              BLOCKRIDE.<span>XYZ</span>
            </p>
          </div>
          <div className="flex gap-[4rem] items-start">
            <div className="w-[40%]">
              <h5 className="text-[#225AA5] font-normal text-[7rem]">BUBBLE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quidem quibusdam! Fuga quidem dolorem porro, quam quasi dignissimos veniam nisi numquam recusandae error magnam in maxime deleniti obcaecati aliquam?
              Sequi, soluta quo ratione animi voluptas pariatur eveniet ducimus repudiandae commodi facere eos voluptatem nostrum alias nihil et? Voluptatum magnam, rerum pariatur ut minima aspernatur dolor? Eius facilis veniam suscipit!</p>
            </div>
            <div className="w-[60%]">
              <p className="font-extrabold text-[12rem] leading-none">
                BUBBLE.<br /><span className="font-medium text-[9rem]">COM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
