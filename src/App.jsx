// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./assets/Routes/Route";

function App() {
  return (
    <div className="w-[90vw] mt-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
