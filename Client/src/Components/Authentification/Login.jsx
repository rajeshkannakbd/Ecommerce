  import React, { useContext } from "react";
  import { useState } from "react";
  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  import { cartContext } from "../../App";
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAunthencate, setIsAuthencate, setUserName } =
      useContext(cartContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:5000/login", { email, password })
        // .then((result) => {
        //   console.log("Registration successful:", result);
        //   const user = result.data?.user;
        //   if (result.status === 200) {
        //     // const user = result?.data?.user;
        //     // if (user && user.name) {
        //     //   setUserName(user.name);
        //     // } else {
        //     //   console.error("User object is missing:");
        //     // }
        //     // //
        //     setUserName(user.name);
        //     setIsAuthencate(true);
        //     navigate("/");
        //   }
        // })
        // .catch((err) => {
        //   console.error("Registration error:", err);
        // });
        .then((result) => {
          const user = result.data?.user;
          if (user && user.name) {
            setUserName(user.name);
            setIsAuthencate(true);
            navigate("/cart");
          }
        })
        .catch((err) => {
          const msg = err.response?.data?.message || "Login failed";
          console.error("Login error:", msg);
          alert(msg);
        });
    };

    return (
      <div className=" mt-40 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h1 className="text-2xl font-bold text-slate-800">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
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
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full border-2 border-slate-300 p-2 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 mt-4 rounded"
            >
              Login
            </button>
          </form>
          <Link to="/signup" className=" hover:text-green-500">Create a new account?</Link>
        </div>
      </div>
    );
  };

  export default Login;
