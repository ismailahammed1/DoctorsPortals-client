/* eslint-disable react/prop-types */
// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import { format } from "date-fns";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetchAppointmentOptions();
  }, []);

  const fetchAppointmentOptions = async () => {
    try {
      const response = await fetch("appointmentOptions.json");
      const data = await response.json();
      setAppointmentOptions(data);
    } catch (error) {
      console.error("Error fetching appointment options:", error);
    }
  };

  return (
    <section className="mt-6 my-6">
      <div>
        <p className="text-primary font-bold text-2xl">
          Available appointment date: {format(selectDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>
      <div className="mt-7 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={`${option._id}`}
            appointmentOptions={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal
          selectDate={selectDate}
          setTreatment={setTreatment}
          treatment={treatment}
        />
      )}

      {/* Render other components here */}
    </section>
  );
};

export default AvailableAppointments;
