import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import telephone from "../../assets/telephone.png";
import Button from "../button/Button";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || name === "" || message === "") {
      alert("All fields are required");
    } else if (!email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email");
    } else {
      try {
        const response = await axios.post(
          "https://codevanta-server.onrender.com/",
          {
            email: email,
            name: name,
            message: message,
            subscribed: subscribe,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setEmail("");
        setName("");
        setMessage("");
        setSubscribe(false);
        console.log(response);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
  return (
    <section>
      <div className="bg-contact bg-cover bg-no-repeat">
        <Navbar />
      </div>
      <div className="flex lg:justify-center px-[4rem] pt-4 sm:pt-2 pb-6 md:px-[0.3rem] sm:px-3">
        <div className="flex sm:flex-col rounded-lg p-6 shadow-2xl gap-3">
          <div>
            <p className="font-semibold text-center text-[1.4rem]">
              Get in Touch
            </p>
            <p className="font-medium text-center text-[1.4rem]">
              We are here for you! How can we help?
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-normal text-[1.2rem]">
                  Name/Organization's Name
                </label>
                <input
                  type="text"
                  placeholder="Name/Organization's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ring-2 ring-black rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-[1.2rem]">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ring-2 ring-black rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-[1.2rem]">
                  Write a Message
                </label>
                <textarea
                  rows="10"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="ring-2 ring-black rounded-md px-2 py-1"
                />
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                />
                <p>Subscribe to Our Newsletter</p>
              </div>
              <div className="flex gap-2 justify-center">
                <Button
                  text={"Submit"}
                  style="bg-[#225AA5] text-white rounded-md py-2 px-6"
                />
              </div>
            </form>
          </div>
          <div>
            <div>
              <img src={telephone} />
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
