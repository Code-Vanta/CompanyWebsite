import React from "react";
import Button from "../../button/Button";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".com") || email === "") {
      alert("Please enter a valid email");
    } else {
      setEmail("");
    }
  }
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg drop-shadow-2xl p-2 sm:flex sm:flex-col sm:gap-[0.2rem] flex gap-[0.8rem] items-center">
        <p className="font-normal text-black text-[2rem] sm:text-[1.5rem] sm:w-full w-[15rem] leading-tight">
          Subscribe to our Newsletter
        </p>
        <form onSubmit={handleSubmit} className="flex p-3 gap-[0.4rem]">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={getEmail}
            className="ring-1 px-1 text-black rounded-sm ring-black"
          />
          <Button
            text={"Submit"}
            style="bg-[#225AA5] text-white rounded-sm py-2 px-6"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
