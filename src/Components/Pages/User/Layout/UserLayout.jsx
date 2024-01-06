import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"

function UserLayout() {
  return (
    <div className="flex flex-col items-center font-Gilroy" >
      <Navbar />
      <Outlet />
      
    </div>
  );
}

export default UserLayout;