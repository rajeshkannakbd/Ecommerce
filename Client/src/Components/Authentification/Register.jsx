import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
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
            <label htmlFor="password" className="block text-base font-medium">
            Password
          </label>
          <div className="mb-6 relative w-full border border-slate-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500">
            <input
              id="password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className=" outline-none w-full"
              required
            />{" "}
            {!password.trim() ? "" :
            <button
              type="button"
              onClick={() => setShow(!show)}
              className=" right-2 absolute"
            >
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>}
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
