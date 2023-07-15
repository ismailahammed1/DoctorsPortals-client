/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault(); // Corrected spelling of preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="bookingMOdal" className="modal-toggle" />
      <div className="modal text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleBooking}
            className=" gap-4 grid-cols-1 grid place-items-center"
          >
            {/* Available appointment date */}
            <input
              type="text"
              disabled
              value={date}
              className=" input input-bordered input-primary w-full  font-bold "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className=" input input-bordered input-primary w-full "
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full "
            />
            <br />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="bg-slate-500 input-primary w-full btn btn-accent"
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="bookingMOdal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
