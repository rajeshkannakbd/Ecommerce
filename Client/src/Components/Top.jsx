import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../App";

const Top = () => {
  const navigate = useNavigate();
  const {
    setIsAuthencate,
    setUserName,
    setRole,
    isAunthencate,
    cartItems,
    setCartItems,
  } = useContext(cartContext);

  const handleLogout = () => {
    setIsAuthencate(false);
    setCartItems([])
    setUserName("");
    setRole("");
    navigate("/login");
  };

  return (
    <div className=" h-10 z-30 w-full fixed  top-0 flex justify-evenly p-0 m-0 bg-green-900 text-white items-center">
      <div className="phone flex m-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <h2>91+123456789</h2>
      </div>
      <div className="offers m-1">
        <h2>
          Get 50% offers on Selected items |{" "}
          <Link to={"/products"}> Shop now</Link>
        </h2>
      </div>
      <div className="lan rounded-full">
        <select
          name=""
          id=""
          className=" rounded-full m-2 outline-none  bg-transparent "
        >
          <option value="Lan" className=" text-black">
            Lang
          </option>
          <option value="Lan" className=" text-black">
            English
          </option>
          <option value="Lan" className=" text-black">
            Tamil
          </option>
          <option value="Lan" className=" text-black">
            Hindi
          </option>
        </select>
        <select
          name=""
          id=""
          className=" rounded-full m-2 outline-none bg-transparent"
        >
          <option value="Lan" className=" text-black">
            Location
          </option>
          <option value="Lan" className=" text-black">
            Trichy
          </option>
          <option value="Lan" className=" text-black">
            Chennai
          </option>
          <option value="Lan" className=" text-black">
            Banglore
          </option>
        </select>
        {!isAunthencate ? (
          <>
            <button
              className="text-sm mx-2 text-green-700 bg-white font-medium outline-2 outline rounded-full px-2 py-1"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
            <button
              className="text-sm mx-2 text-green-700 bg-white font-medium outline-2 outline rounded-full px-2 py-1"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </>
        ) : (
          <button
            className="text-sm mx-2 text-white bg-green-600 font-medium outline-2 outline rounded-full px-3 py-1"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Top;
