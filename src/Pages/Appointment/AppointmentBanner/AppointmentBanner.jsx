// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// @ts-ignore
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import banner1 from "../../../assets/images/banner.jpeg";

// eslint-disable-next-line react/prop-types
const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  return (
    <header className=" " style={{ backgroundImage: `url(${banner1})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="selected"
              selected={selectDate}
              onSelect={setSelectDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
