import React, { useState } from "react";
import "./styles/navbar.css";

const Navbar = ({ onSelectCategory }) => {
  const [active, setActive] = useState("All");

  const menuItems = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

const handleClick = (item) => {
    setActive(item);
    onSelectCategory(item);
}

  return (
    <div className="navbar">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`nav_item ${active === item ? "active" : ""}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
