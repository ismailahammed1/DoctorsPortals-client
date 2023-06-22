// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Review = ({ review }) => {
  // eslint-disable-next-line react/prop-types
  const { name, location, img, review: useReviews } = review;
  return (
    <div className="card  bg-base-100 shadow-xl text-black text-left">
      <div className="card-body ">
        <p>{useReviews}</p>
        <div className="flex items-center mt-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="ml-6">
            <h2 className="text-lg ">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
