import React from "react";
import NewsLetter from "../newsletter/NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-[4rem] pt-4 sm:pt-2 pb-6 md:px-[0.3rem] sm:px-3">
        <div>
          <NewsLetter />
          <div className="flex justify-around sm:flex sm:justify-start sm:gap-x-[6rem] sm:gap-y-7 p-3 sm:flex-wrap">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Navigations</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Legal</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-medium">Contact Us</h3>
              <div className="flex flex-col gap-[0.3rem]">
                <p>contact@codevanta.tech</p>
                <p>+234 701 2340 590</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
