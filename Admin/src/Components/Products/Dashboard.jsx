import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-green-600 w-64 h-dvh p-4 text-white ">
      <ul className="text-center text-bold text-lg uppercase space-y-4">
        <li className="border-b-2 pb-2">
          <Link to="/admin/dashboard/products">All Products</Link>
        </li>
        <li className="border-b-2 pb-2">
          <Link to="/admin/dashboard/products/create">Create</Link>
        </li>
        <li className="border-b-2 pb-2">
          <Link>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
