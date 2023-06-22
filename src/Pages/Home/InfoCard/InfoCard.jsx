/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div
      className={`card text-white p-6 md:card-side lg:card-side shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
