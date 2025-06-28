import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext, searchContext } from "../../App";
import Top from "./Top";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🔄 mobile menu toggle
  const { cartItems, userName, role } = useContext(cartContext);
  const { search, setSearch } = useContext(searchContext);
  const navigate = useNavigate();
  const isUserLoggedIn = userName?.length > 0;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <Top/>
<header className="w-full bg-white shadow-md fixed top-[54px] md:top-[36px] z-30">

      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
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
          <h1 className="font-bold text-lg">SHOP CART</h1>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/latestProducts" className="hover:text-green-600">What's New</Link>
          <Link to="#" className="hover:text-green-600">Delivery</Link>
          {role === "admin" && (
            <Link to="/admin/dashboard" className="hover:text-green-600">Dashboard</Link>
          )}

          <div className="relative">
            <button
              onClick={() => setCategories(!categories)}
              className="flex items-center gap-1 hover:text-green-600"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {categories && (
              <ul className="absolute bg-white shadow-md rounded mt-2 p-2 z-50 space-y-2 w-40">
                {["products", "men", "women", "jewelery", "electronics"].map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/${cat}`}
                      onClick={() => setCategories(false)}
                      className="block hover:text-blue-600"
                    >
                      {cat[0].toUpperCase() + cat.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search */}
          <div className="relative w-[200px]">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && navigate("/search")}
              className="w-full pl-10 pr-3 py-1 rounded border border-gray-300 focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </nav>

        {/* Account & Cart */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/userdetails" className="flex gap-1 items-center hover:text-green-600">
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0
                3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5
                7.5 0 0 1 14.998 0A17.933 17.933 0 0
                1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span>{isUserLoggedIn ? userName : "Account"}</span>
          </Link>

          <Link to="/cart" className="relative flex gap-1 items-center hover:text-green-600">
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
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
            <span>Cart</span>
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs text-black font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
      

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 py-3 space-y-4 bg-white shadow-lg border-t">
          <Link to="/" onClick={toggleMenu} className="block">Home</Link>
          <Link to="/latestProducts" onClick={toggleMenu} className="block">What's New</Link>
          <Link to="#" className="block">Delivery</Link>
          {role === "admin" && <Link to="/admin/dashboard" onClick={toggleMenu} className="block">Dashboard</Link>}
          <Link to="/userdetails" onClick={toggleMenu} className="block">{isUserLoggedIn ? userName : "Account"}</Link>
          <Link to="/cart" onClick={toggleMenu} className="block">Cart ({cartItems.length})</Link>

          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && navigate("/search")}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      )}
    </header></>
  );
};

export default Header;
