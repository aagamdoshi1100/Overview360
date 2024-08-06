import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { userFeedbacks } from "../Data";

const CustomerFeedback = () => {
  return (
    <div className="feedback py-3 p-3 bg-[#202028] text-white h-[380px] overflow-scroll w-[90vw] sm:w-[84vw] md:w-[35vw] rounded-md overflow-y-scroll custom-scrollbar">
      <p className="py-1 mb-1 text-white font-bold text-xl">
        Customer's Feedback
      </p>
      {userFeedbacks.map((data, i) => {
        return (
          <div key={i} className="flex flex-col gap-2">
            <p className="flex items-center">
              <span>
                <img
                  src={data.avtar}
                  className="h-6 w-6 object-cover mr-2 rounded-full"
                  alt="imgavtar"
                />
              </span>
              {data.customer}
            </p>
            <p className="flex">
              {new Array(5)
                .fill(0)
                .map((star, i) =>
                  data.ratings < i ? (
                    <FaRegStar key={i} />
                  ) : (
                    <FaStar key={i} style={{ color: "yellow" }} />
                  )
                )}
            </p>
            <p className="text-[12px]">{data.feedback}</p>
            {i !== userFeedbacks.length - 1 && (
              <hr className="pb-2 border-[#3b3b43]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomerFeedback;
