import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";

// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

// @ts-ignore
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);

export default router;
