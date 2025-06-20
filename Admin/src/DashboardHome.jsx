import React from "react";
import Dashboard from "./Components/Products/Dashboard";
import Products from "./Components/Products/Products";

const DashboardHome = () => {
  return (
    <div className="flex h-screen ">
      <div className=" flex sticky top-0 h-screen">
        <Dashboard />
      </div>
      <div className=" flex-1 overflow-y-auto  ">
        <Products />
      </div>
    </div>
  );
};

export default DashboardHome;
