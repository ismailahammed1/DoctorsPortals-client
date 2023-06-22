// eslint-disable-next-line no-unused-vars
import React from "react";
// @ts-ignore
import doctor from "../../../assets/images/doctor.png";
// @ts-ignore
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div className="mt-[169px]" style={{ background: `url(${appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden lg:block"
            alt=""
          />
          <div className=" text-left lg:ml-[28px]">
            <h1 className="text-lg text-primary">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
