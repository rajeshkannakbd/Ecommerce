  // import React, { useState } from "react";
  // import { useEffect } from "react";
  // import { Link, Outlet } from "react-router-dom";
  // import axios from "axios"

  // const Homepage = () => {

  //   return (
  //     <>
  //     <div className=" flex w-full h-screen">

  //       <div className=" sidebar bg-slate-700 text-white w-[200px] h-screen">
  //         <div className=" list-none flex gap-6 flex-col mx-6 ">
  //           <div className=" flex items-center content-center flex-row">
  //             <li className=" p-4  text-xl font-semibold ">
  //               <Link to="/">Home</Link>
  //             </li>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="size-5 relative right-3"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  //               />
  //             </svg>
  //           </div>
  //             <div className=" flex items-center content-center flex-row">
  //               <li className=" p-4 text-xl font-semibold ">
  //                 <Link to="/products">Products</Link>
  //               </li>
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   strokeWidth={1.5}
  //   stroke="currentColor"
  //   className="size-5 relative right-3"
  // >
  //   <path
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  //   />
  // </svg>
  //             </div>
  //           <div className=" flex items-center content-center flex-row">
  //             <Link to="/userdetail"><li className=" p-4 text-xl font-semibold ">Users</li></Link>
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="none"
              //   viewBox="0 0 24 24"
              //   strokeWidth={1.5}
              //   stroke="currentColor"
              //   className="size-5 relative right-3"
              // >
              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              //   />
              // </svg>
  //           </div>
  //           <div className=" flex items-center content-center flex-row">
  //            <Link to="/orderdetail"> <li className=" p-4 text-xl font-semibold ">Orders</li></Link>
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="none"
              //   viewBox="0 0 24 24"
              //   strokeWidth={1.5}
              //   stroke="currentColor"
              //   className="size-5 relative right-3"
              // >
              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              //   />
              // </svg>
  //           </div>
  //           <div className=" flex items-center content-center flex-row">
  //             <li className=" p-4 text-xl font-semibold ">Analytics</li>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="size-5 relative right-3"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
  //               />
  //             </svg>
  //           </div>

  //         </div>
  //       </div>
  //        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
  //         <Outlet />
  //       </div>
  //     </div>
  //     </>
  //   );
  // };

  // export default Homepage;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-[220px] bg-slate-700 text-white md:h-screen md:sticky md:top-0 flex-shrink-0 z-10">
        <ul className="flex md:flex-col flex-row md:gap-6 gap-2 p-4 md:mx-6 justify-around md:justify-start">
          {/* Home */}
          <li className="flex items-center gap-2">
            <Link to="/" className="text-lg font-semibold hover:underline">
              Home
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </li>

          {/* Products */}
          <li className="flex items-center gap-2">
            <Link to="/products" className="text-lg font-semibold hover:underline">
              Products
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </li>

          {/* Users */}
          <li className="flex items-center gap-2">
            <Link to="/userdetail" className="text-lg font-semibold hover:underline">
              Users
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </li>

          {/* Orders */}
          <li className="flex items-center gap-2">
            <Link to="/orderdetail" className="text-lg font-semibold hover:underline">
              Orders
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto max-h-screen p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Homepage;
