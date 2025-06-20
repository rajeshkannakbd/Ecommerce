import React, { useContext } from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from '../../App';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userName,setUserName} =useContext(cartContext)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log("Registration successful:", result);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  

  return (
    <div className="w-auto h-auto mt-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-slate-800">Register</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-semibold">
              Name
            </label>
            <input
            name="fakeName"
              id="name"
              type="text"
              value={name}
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-semibold">
              Email
            </label>
            <input
              name="fakeEmail" 
              id="email"
              type="email"
              value={email}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xl font-semibold">
              Password
            </label>
            <input
              name="new-password" 
              id="password"
              type="password"
              value={password}
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full  bg-green-600 text-white py-2 mt-3 rounded"
          >
            Register
          </button>
          <Link to="/login" className=" hover:text-green-500">Already Have an Account?</Link>
        </form>
        
      </div>
    </div>
  );
};

export default Register
