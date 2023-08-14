import { useState,useEffect } from "react";
import axios from "axios";

const GetReview = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    async function getReview (){
      const response = await axios.get(
        "https://codevanta-server.onrender.com/get_review",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response);
      console.log(response);
    }
  }, [])
  return (
    <div className="px-[4rem] pt-4 sm:pt-2 pb-6 md:px-[0.3rem] sm:px-3">
      <p className="text-center font-bold text-[3rem]">
        Featured <span className="text-[#225AA5]">Reviews</span>
      </p>
      <div className="">
      {data && data.map((review)=>{
        return <div key={review.id} className="">
          <p>{review.name}</p>
          <p>{review.organization}</p>
          <p>{review.message}</p>
          <p>{review.date}</p>
        </div>
      })}
      </div>
    </div>
  );
}

export default GetReview