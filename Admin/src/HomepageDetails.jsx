import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlinkBlur } from "react-loading-indicators"
import axios from "axios";

const HomepageDetails = () => {
  const [usercount, setUsercount] = useState(0);
  const [productcount, setProductcount] = useState(0);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://ecommerce-sjhs.onrender.com/users")
      .then((data) => {setUsercount(data.data.users.length);setLoading(false)});
  }, []);

  useEffect(() => {
    axios.get("https://ecommerce-sjhs.onrender.com/Product")
      .then((data) =>{ setProductcount(data.data.product.length);setLoading(false)});
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-semibold text-slate-600 mb-10">
        Admin Dashboard
      </h1>
        {loading ? <center><div className=" mt-20 "> <BlinkBlur color="#315ecc" size="large" text="loading..." textColor="" /></div></center> : 
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Product Card */}
        <div className="border-2 border-slate-300 shadow-md rounded-lg p-6 w-full max-w-xs">
          <h2 className="text-lg font-medium mb-2 text-gray-700">
            Number Of Products:
          </h2>
          <div className="text-3xl font-bold text-center mb-4">
            {productcount}
          </div>
          <div className="flex items-center justify-center text-blue-500 cursor-pointer">
            <span className="mr-2">View Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* User Card */}
        <div className="border-2 border-slate-300 shadow-md rounded-lg p-6 w-full max-w-xs">
          <h2 className="text-lg font-medium mb-2 text-gray-700">
            Number Of Users:
          </h2>
          <div className="text-3xl font-bold text-center mb-4">
            {usercount}
          </div>
          <Link to="/userdetail">
            <div className="flex items-center justify-center text-blue-500 cursor-pointer">
              <span className="mr-2">View Users</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      }
    </div>
  );
};

export default HomepageDetails;
