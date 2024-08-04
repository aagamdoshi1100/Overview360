import React from "react";
import { faker } from "@faker-js/faker";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const CustomerFeedback = () => {
  let userFeedbacks = [
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 1, max: 5 }),
      feedback: faker.lorem.paragraph(),
    },
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 1, max: 5 }),
      feedback: faker.lorem.paragraph(),
    },
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 1, max: 5 }),
      feedback: faker.lorem.paragraph(),
    },
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 1, max: 5 }),
      feedback: faker.lorem.paragraph(),
    },
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 2, max: 5 }),
      feedback: faker.lorem.sentence(),
    },
    {
      avtar: faker.image.avatar(),
      customer: faker.person.fullName(),
      ratings: faker.number.int({ min: 2, max: 5 }),
      feedback: faker.lorem.paragraph({ min: 3, max: 5 }),
    },
  ];
  return (
    <div className="feedback py-3 p-3 bg-[#202028] text-white h-[380px] overflow-scroll w-[38vw] rounded-md mx-6 mb-6 overflow-y-scroll custom-scrollbar">
      <p className="py-2">Customer's Feedback</p>
      {userFeedbacks.map((data, i) => {
        return (
          <div className="flex flex-col gap-2">
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
            )}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default CustomerFeedback;
