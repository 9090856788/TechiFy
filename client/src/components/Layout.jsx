import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaFilm,
  FaTshirt,
  FaCoffee,
  FaBalanceScale,
  FaNewspaper,
  FaMapMarkedAlt,
  FaFutbol,
  FaLaptop,
} from "react-icons/fa"; // Font Awesome icons
import { Button } from "./ui/button"; // Import local Button component
import { Input } from "./ui/input"; // Import local Input component

const categories = [
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Education & Career", icon: <FaGraduationCap /> },
  { name: "Entertainment", icon: <FaFilm /> },
  { name: "Fashion & Beauty", icon: <FaTshirt /> },
  { name: "Food & Drinks", icon: <FaCoffee /> },
  { name: "Humanities & Law", icon: <FaBalanceScale /> },
  { name: "News & Politics", icon: <FaNewspaper /> },
  { name: "Places & Travel", icon: <FaMapMarkedAlt /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Technology", icon: <FaLaptop /> },
  { name: "Wellness", icon: <FaBalanceScale /> }, // Using the same icon for simplicity, feel free to replace
];

const Layout = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar - Full Width */}
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

      {/* Main Content Area */}
      <div className="flex flex-row w-full flex-1">
        {/* Menubar (Left Sidebar) */}
        <div
          className={`bg-gray-800 text-white ${
            isSidebarExpanded ? "w-56" : "w-20"
          } transition-all duration-300 ease-in-out`} // Adjust width on hover
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
        >
          <div className="mt-6 px-4">
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 py-2 hover:bg-gray-700 px-4 rounded-md cursor-pointer"
                >
                  <div className="text-xl">{category.icon}</div>
                  {isSidebarExpanded && (
                    <span className="text-md">{category.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
