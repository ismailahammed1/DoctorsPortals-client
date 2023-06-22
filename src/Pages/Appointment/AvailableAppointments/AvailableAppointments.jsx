// eslint-disable-next-line no-unused-vars
import { format } from "date-fns";
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const AvailableAppointments = ({ selectDate }) => {
  return (
    <div className="bg-base-100">
      <div className="my-6">
        <p className="text-center text-primary font-semibold">
          Available appointment date:{format(selectDate, "PP")}
        </p>
      </div>
    </div>
  );
};

export default AvailableAppointments;
