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
      setData(response.data);
      console.log(response);
    }
    getReview()
  }, [])
  return (
    <div className="px-[4rem] pt-2 sm:pt-2 pb-3 md:px-[0.3rem] sm:px-3">
      <p className="text-center font-bold text-[3rem] sm:text-[2rem]">
        Featured <span className="text-[#225AA5]">Reviews</span>
      </p>
      {!data ? (
        <p className="font-bold text-center">Review will be available shortly. You can write a review about us in the contact page.</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-3">
          {data &&
            data.map((review, index) => {
              return (
                <div
                  key={index}
                  className="shadow-md rounded-md text-[#225AA5] bg-[#E6F5FB] flex flex-col gap-2 p-3"
                >
                  <p className="font-normal text-[2rem] sm:text-[1.5rem]">
                    {review.name}
                  </p>
                  <p className="font-normal text-[1.5rem] sm:text-[1.1rem]">
                    {review.organization}
                  </p>
                  <p className="font-normal">{review.message}</p>
                  <p className="font-light text-[rem] sm:text-[rem]">
                    {review.date?.slice(0, 10)}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default GetReview