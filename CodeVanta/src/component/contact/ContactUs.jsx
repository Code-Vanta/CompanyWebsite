import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import telephone from '../../assets/telephone.png'
import Button from "../button/Button";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // if (!email.includes("@") || !email.includes(".com")) {
        //   alert("Please enter a valid email");
        // } 
        if (
          email === "" ||
          name === "" ||
          message === "" ||
          !email.includes("@") ||
          !email.includes(".com")
        ) {
          alert("All fields are required");
        }
      const response = await axios.post(
        "https://codevanta-server.onrender.com/",
        {
            headers: {
            "Content-Type": "application/json",
          },
          body:{
            email: email,
            name: name,
            message: message,
            subscribed: subscribe
          },
        }
        );
          //  setEmail("");
          //  setName("");
          //  setMessage("");
          //  setSubscribe(false)
         
      console.log(response);
    } catch (error) {
      console.error("Error adding subscriber:", error);
    }
  };
  return (
    <section>
      <div className="bg-contact bg-cover bg-no-repeat">
        <Navbar />
      </div>
      <div>
        <div>
          <p>Get in Touch</p>
          <p>We are here for you! How can we help?</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label>Name/Organization's Name</label>
              <input
                type="text"
                placeholder="Name/Organization's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Write a Message</label>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                value={subscribe}
                onChange={() => setSubscribe(false)}
              />
              <p>Subscribe to Our Newsletter</p>
            </div>
            <Button
              text={"Submit"}
              style="bg-[#225AA5] text-white rounded-sm py-2 px-6"
            />
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
    </section>
  );
};

export default ContactUs;
