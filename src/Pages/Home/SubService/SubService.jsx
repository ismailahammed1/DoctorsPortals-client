// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const SubService = () => {
  return (
    <div className="hero bg-gray-400 text-black mt-[152px] text-left ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="rounded-lg shadow-2xl" />
        <div className="lg:ml-[102px]">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SubService;
