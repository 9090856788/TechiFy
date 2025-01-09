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

const LeftSideMenuBar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <>
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
    </>
  );
};

export default LeftSideMenuBar;
