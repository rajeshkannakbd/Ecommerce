import React from "react";
import Header from "../Layots/Header";
import Top from "../Layots/Top";
import Footer from "../Layots/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col pt-[96px] min-h-screen">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
