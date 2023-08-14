import { useState } from "react";
import axios from "axios";
const PostReview = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || message === "") {
      alert(
        "Name and Review message are required only Organization name is optional"
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
    <div className="px-[4rem] pt-4 sm:pt-2 pb-6 md:px-[0.3rem] sm:px-3">
      <div>
        <p>Write a Review about Our Services.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-normal text-[1.2rem]">
              Name/Organization's Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ring-2 ring-black rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal text-[1.2rem]">Organization's Name</label>
            <input
              type="text"
              placeholder="Organization's name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="ring-2 ring-black rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal text-[1.2rem]">Write a Message</label>
            <textarea
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="ring-2 ring-black rounded-md px-2 py-1"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-normal text-[1.2rem]">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="ring-2 ring-black rounded-md px-2 py-1"
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
  );
};

export default PostReview;
