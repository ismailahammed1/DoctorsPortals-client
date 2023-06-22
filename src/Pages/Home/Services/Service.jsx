/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Service = ({ service }) => {
  // eslint-disable-next-line react/prop-types
  const { name, description, img } = service;
  return (
    <div className="card bg-base-100 text-slate-950 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Service;
