import React from "react";
import "./styles/header.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          TechiFy
        </div>
        <div>
          <button onClick={() => navigate("/login")} className="login">
            <FaArrowRightFromBracket className="arrow_icon" />
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
