import React, { useState } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("All");

  const menuItems = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <div className="navbar">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`nav_item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
