import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { cartContext, searchContext } from "../App";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const { cartItems, setCartItems,userName,setUserName } = useContext(cartContext);
  const { search, setSearch } = useContext(searchContext);
  const navigate = useNavigate();
  const isthere = userName.length;
  
  // useEffect(() => navigate("/search"), [search]);
  return (
    <div className="header w-full z-20 flex justify-evenly p-4 items-center bg-white shadow-md fixed  top-10">
      {/* Logo */}
      <Link to="/">
        <div className="logo flex gap-2 items-center">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218
              c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0
              1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <h1 className="font-bold text-lg">SHOP CART</h1>
        </div>
      </Link>

      {/* Categories */}
      <div className="categories relative">
        <button
          // // onMouseOver={() => setCategories(!categories)}
          // onMouseEnter={() => setCategories(!categories)}
          onClick={() => setCategories(!categories)}
          className="flex items-center gap-1"
        >
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {categories && (
          <ul className="absolute bg-white shadow-md z-20 rounded-lg p-3 mt-2 space-y-2 w-40">
            <Link to="/products" onClick={() => setCategories(!categories)}>
              <li className="hover:text-blue-500 flex justify-between">
                All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 absolute top-4 right-24 mx-2 m-auto flex items-center content-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </Link>
            <Link to="/men" onClick={() => setCategories(!categories)}>
              <li className="hover:text-blue-500 flex justify-between">
                Men{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 absolute top-10 right-24 m-auto flex items-center content-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </Link>
            <Link to="/women" onClick={() => setCategories(!categories)}>
              <li className="hover:text-blue-500 flex justify-between">
                Women{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 absolute top-12 my-4 right-16 mx-2 m-auto flex items-center content-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </Link>
            <Link to="/jewelery" onClick={() => setCategories(!categories)}>
              <li className="hover:text-blue-500 flex justify-between">
                Jewelery{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 absolute top-28 right-11 m-auto flex items-center content-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </Link>
            <Link to="/electronics" onClick={() => setCategories(!categories)}>
              <li className="hover:text-blue-500 flex justify-between">
                Electronics{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 absolute top-20 my-2 right-14 m-auto flex items-center content-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </Link>
          </ul>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-8">
        <h2 className="cursor-pointer">
          <Link to="/">
            Home
          </Link>

        </h2>
        <h2 className="cursor-pointer">What's New</h2>
        <h2 className="cursor-pointer">Delivery</h2>
      </div>

      {/* Search */}
      <div className="relative w-[250px]">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/search");
            }
          }}
          className="w-full pl-10 pr-3 py-1 rounded-lg border border-gray-300 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
            5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {/* Account & Cart */}
      <div className="account flex gap-6 items-center">
        <Link to="/userdetails">
        <div className="flex gap-1 items-center cursor-pointer">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0
              3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5
              7.5 0 0 1 14.998 0A17.933 17.933 0 0
              1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <h2>{isthere === 0 ? "Account" : userName }</h2>
        </div></Link>

        <Link to="/cart">
          <div className="flex gap-1 items-center relative">
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
                d="M2.25 3h1.386c.51 0 .955.343
                1.087.835l.383 1.437M7.5 14.25a3
                3 0 0 0-3 3h15.75m-12.75-3h11.218
                c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                60.114 0 0 0-16.536-1.84M7.5
                14.25 5.106 5.272M6 20.25a.75.75 0
                1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75
                0a.75.75 0 1 1-1.5 0 .75.75 0 0 1
                1.5 0Z"
              />
            </svg>

            <h2>Cart</h2>
            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-yellow-400 text-xs font-semibold text-black">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
