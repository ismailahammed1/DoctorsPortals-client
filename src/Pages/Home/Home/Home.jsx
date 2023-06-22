// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/Infocards";
import Services from "../Services/Services";
// @ts-ignore
import SubService from "/src/Pages/Home/SubService/SubService";
import MakeAppointment from "../MakeAppoinment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <SubService></SubService>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
