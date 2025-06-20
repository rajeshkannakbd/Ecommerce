import React from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
import Homepage from "../Homepage";

const DasboardLayout = () => {
  return (
    <div className="flex h-screen ">
      <div className=" flex sticky top-0 h-screen">
        <Homepage/>
      </div>
      <div className=" flex-1 overflow-y-auto  ">
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
