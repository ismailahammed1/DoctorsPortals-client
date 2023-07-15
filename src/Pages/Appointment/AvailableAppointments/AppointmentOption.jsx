// @ts-nocheck
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;

  return (
    <div className="card text-black  bg-white shadow-xl">
      <div className="card-body text-center ">
        <h2 className="text-4xl text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"} </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "spaces"}{" "}
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointmentOptions)}
            htmlFor="bookingMOdal"
            className="btn bg-secondary"
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
