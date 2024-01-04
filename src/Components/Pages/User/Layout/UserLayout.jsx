import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="flex flex-col items-center">
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default UserLayout;