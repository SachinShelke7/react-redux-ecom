import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen 2xl:max-w-[1536px] 2xl:mx-auto">
      <Navbar title="STORE" />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
