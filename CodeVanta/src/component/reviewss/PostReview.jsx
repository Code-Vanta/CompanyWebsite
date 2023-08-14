import { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
const PostReview = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || message === "" || organization === "") {
      alert(
        "Fill all required fields. Name, Organization name and Message are required"
      );
    } else {
      try {
        const response = await axios.post(
          "https://codevanta-server.onrender.com/post_review",
          {
            name: name,
            organization: organization,
            message: message,
            date: date,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setName("");
        setOrganization("");
        setMessage("");
        setDate("");
        console.log(response);
      } catch (error) {
        console.error("Error adding subscriber:", error);
      }
    }
  };
  return (
    <div className="px-[4rem] pt-4 sm:pt-2 pb-6 md:px-[0.5rem] sm:px-3">
      <div>
        <p className="font-medium text-[2rem] text-center sm:text-[1.5rem]">
          Write a Review about{" "}
          <span className="text-[#225AA5]">Our Services.</span>
        </p>
        <div className="lg:mx-[7rem]">
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded-lg p-3 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-normal text-[1.2rem]">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="ring-2 ring-slate-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-normal text-[1.2rem]">
                Organization's Name
              </label>
              <input
                type="text"
                placeholder="Organization's name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="ring-2 ring-slate-300 rounded-md px-2 py-1"
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
                className="ring-2 ring-slate-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label className="font-normal text-[1.2rem]">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="ring-2 ring-slate-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                text={"Post Review"}
                style="bg-[#225AA5] text-white rounded-md py-2 px-6"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
