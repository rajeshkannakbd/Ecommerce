import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAunthencate, setIsAuthencate, setUserName, role, setRole } =
    useContext(cartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        const user = result.data?.user;
        if (user && user.name) {
          setUserName(user.name);
          setRole(user.role);
          setIsAuthencate(true);
          navigate("/cart");
        }
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("An unexpected error occurred");
        }
      });
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 -mt-14 min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full border border-slate-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full border border-slate-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
