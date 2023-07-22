import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";

// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/Signup/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";

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
  {
    path: "dashboard",
    element: (
      <PrivetRoutes>
        <Dashboard></Dashboard>
      </PrivetRoutes>
    ),
  },
]);

export default router;
