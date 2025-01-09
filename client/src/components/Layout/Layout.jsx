import React, { useState } from "react";
import Navbar from "../Navbar";
import LeftSideMenuBar from "../LeftSideMenuBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-row w-full flex-1">
        {/* Menubar (Left Sidebar) */}
        <LeftSideMenuBar />

        {/* Right side Content Area */}
      </div>
    </div>
  );
};

export default Layout;
