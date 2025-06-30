import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";

const UserDetails = () => {
  const {
    setIsAuthencate,
    setUserName,
    setRole,
    isAunthencate,
    cartItems,
    role,
    userName,
    setCartItems,
    // setEmailuser, emailuser (uncomment if needed)
  } = useContext(cartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAunthencate) {
      navigate("/login");
    }
  }, [isAunthencate, navigate]);

  const handleLogout = () => {
    setIsAuthencate(false);
    setCartItems([]);
    setUserName("");
    setRole("");
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-6 p-6 w-full min-h-screen bg-gray-50">
      <h1 className="pt-6 font-bold text-2xl uppercase text-center">Your Profile</h1>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-xl w-full mx-auto">
        <div className="mb-4">
          <h2 className="font-bold text-lg">Name:</h2>
          <p className="text-gray-700">{userName}</p>
        </div>

        {/* Uncomment if you want to show email */}
        {/* <div className="mb-4">
          <h2 className="font-bold text-lg">Email:</h2>
          <p className="text-gray-700">{emailuser}</p>
        </div> */}

        <div className="mb-4">
          <h2 className="font-bold text-lg">Role:</h2>
          <p className="text-gray-700">{role}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
        <button
          onClick={handleLogout}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full w-60 text-center"
        >
          Log Out
        </button>

        <Link to="/" className="w-60 text-center">
          <div className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
            Go Back To Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
