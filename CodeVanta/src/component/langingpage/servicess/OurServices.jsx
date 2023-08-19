import React from "react";

const OurServices = () => {
  return (
    <section>
      <div className="px-[5rem] pt-2 sm:pt-1 pb-3 md:px-[1rem] sm:px-3">
        <p className="text-center font-bold text-[3rem] py-6">
          Our Unique <span className="text-[#225AA5]">Services</span>
        </p>
        <div className="lg:flex lg:flex-row gap-[1.5rem] flex flex-col">
          <div className="lg:w-[50%]">
            <p className="font-medium text-[1.5rem]">Technological Solution </p>
            <p>
              at CodeVanta we offer software and hardware solutions to enhance
              business productivity and efficiency through our innovative
              thinking and expertise.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <p className="font-medium text-[1.5rem]">Digital Transformation</p>
            <p>
              we provide guidance and assist businesses and individuals in
              adopting technologies and transitioning to the fast changing
              technological world.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row gap-[1.5rem] flex flex-col py-[2rem]">
          <div className="lg:w-[50%]">
            <p className="font-medium text-[1.5rem]">
              E-commerce and Marketplace{" "}
            </p>
            <p>
              at CodeVanta we help in creating an online platform for businesses
              to connect with their potential customers and helping them perform
              seamless transactions while expanding their market reach.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <p className="font-medium text-[1.5rem]">Management System</p>
            <p>
              at CodeVanta we can help you manage your existing software and
              improve its productivity and efficiency in accordance with the
              latest technological changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
