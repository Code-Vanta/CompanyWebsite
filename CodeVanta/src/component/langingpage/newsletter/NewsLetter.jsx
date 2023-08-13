import React from "react";
import Button from "../../button/Button";
import { useState } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  function getEmail(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e) {
    const myKey = "3e1e3108d002088759ac3e36e3f24bb0-us21";
    const listID = "d491efce71";
    const templateId = ''
    try{
      e.preventDefault();
      if (!email.includes("@") || !email.includes(".com") || email === "") {
        alert("Please enter a valid email");
      }
      const response = await axios.post(`us21.api.mailchimp.com/3.0/lists/${listID}/member`,{
        email_address : email,
        status : 'Subscribed'
      },
      {
        headers : {
          Authorization : `apiKey ${myKey}`,
          'Content-Type' : 'application/json'
        }
      })
      console.log('subscriber added:', response.data)
      const campaignResponse = await axios.post(`us21.api.mailchimp.com/3.0/automations/${templateId}/actions/emails`,{
        recipients: {
          list_id : listID
        }
      },
      {
         headers : {
          Authorization : `apiKey ${myKey}`,
          'Content-Type' : 'application/json'
        }
      })
      console.log("Automated mail sent successfully:", campaignResponse.data)
    } catch (error) {
      console.log("Error: ", error)
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
    </div>
  );
};

export default NewsLetter;
