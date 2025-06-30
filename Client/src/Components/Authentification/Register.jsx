import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserName } = useContext(cartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/register`, { name, email, password })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration error:", err);
        alert(err.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div className="flex items-center justify-center -mt-14 min-h-screen px-4 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-medium">
              Name
            </label>
            <input
              name="fakeName"
              id="name"
              type="text"
              value={name}
              autoComplete="off"
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setName(value);
                }
              }}
              placeholder="Enter Name"
              className="w-full border border-slate-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium">
              Email
            </label>
            <input
              name="fakeEmail"
              id="email"
              type="email"
              value={email}
              autoComplete="off"
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
              name="new-password"
              id="password"
              type="password"
              value={password}
              autoComplete="off"
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
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-green-600 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
