/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React from "react";
// @ts-ignore
import banner from "../../../assets/images/sf.jpeg";
import banner1 from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${banner1})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse mx-5">
        <img src={banner} className=" rounded-lg shadow-2xl" />
        <div className="text-left ">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
