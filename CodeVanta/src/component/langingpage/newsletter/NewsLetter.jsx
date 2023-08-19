import React from "react";
import Button from "../../button/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  function getEmail(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      campaign: {
        campaignId: "PHp3H", // Replace with your campaign ID
      },
      contact: {
        email,
      },
    };

    try {
      const response = await axios.post(
        "https://api.getresponse.pl/v3/contacts",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": "api-key w3v7b58ta18bq81lxfs3gdk7myjygf1i", // Replace with your GetResponse API key
          },
        }
      );

      if (response.status === 202) {
        alert("Subscription successful!"); // Modify this based on your UI/UX
        setEmail("");
      } else {
        alert("Subscription failed. Please try again."); // Modify this based on your UI/UX
      }
    } catch (error) {
      console.error("Error subscribing:", error);
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
            text={"Subscribe"}
            style="bg-[#225AA5] text-white rounded-sm py-2 px-6"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
