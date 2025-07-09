import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";

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
    setCartItems([]);
    setUserName("");
    setRole("");
    navigate("/login");
  };

  return (
    <div className="h-auto py-1 px-4 z-30 w-full bg-green-900 text-white text-xs sm:text-sm shadow-md">
      <div className="flex flex-col sm:flex-row flex-wrap mx-20 gap-2">
        <div className="sm:flex hidden items-center gap-1 whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25
              2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
              1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
              3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span className="truncate">+91 123456789</span>
        </div>
        <div className="hidden md:block text-center flex-grow truncate">
          Get 50% offers on Selected items |{" "}
          <Link to="/products" className="underline">
            Shop now
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap ml-auto whitespace-nowrap">
          <div className="hidden sm:block">
          <select className="rounded-full px-2 bg-transparent text-white outline-none">
            <option className="text-black">Lang</option>
            <option className="text-black">English</option>
            <option className="text-black">Tamil</option>
            <option className="text-black">Hindi</option>
          </select>
          <select className="rounded-full px-2 bg-transparent text-white outline-none">
            <option className="text-black">Location</option>
            <option className="text-black">Trichy</option>
            <option className="text-black">Chennai</option>
            <option className="text-black">Bangalore</option>
          </select></div>
          <div className="flex mr-16 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25
              2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
              1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
              3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span className="truncate">+91 123456789</span>
        </div>
          {!isAunthencate ? (
            <>
              <button
                className="bg-white text-green-800 px-2 py-1 rounded-full font-medium "
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
              <button
                className="bg-white text-green-800 px-2 py-1 rounded-full font-medium"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          ) : (
            <button
              className="bg-green-600 text-white px-3 py-1 rounded-full font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
