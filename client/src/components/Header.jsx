import React from "react";
import "./styles/header.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          TechiFy
        </div>
        <div>
          <button onClick={() => navigate("/login")} className="admin-login">
            Admin Login <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
