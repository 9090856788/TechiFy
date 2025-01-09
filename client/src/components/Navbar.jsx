import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600 p-4 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyLogo</div>

        {/* Search Box */}
        <div className="flex-1 mx-4">
          <Input
            className="w-64 py-2 px-4 border border-gray-300 rounded-lg" // Smaller search bar
            placeholder="Search..."
          />
        </div>

        {/* Login Button */}
        <Button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
          Login
        </Button>
      </div>
    </>
  );
};

export default Navbar;
