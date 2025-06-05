import React, { useState } from "react";
import "./styles/loginForm.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import or from "../assets/or.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://user-authentication-system-backend-hazel.vercel.app/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const userResponse = await response.json();
      if (response.ok) {
        console.log("Registration successful:", userResponse);
        navigate("/login");
      } else {
        console.error("Registration failed:", userResponse);
        alert(userResponse.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <>
      <div className="loginForm_container">
        {/* login form header */}
        <div className="loginForm_header">
          <div>
            <h2>
              Welcome to{" "}
              <b>
                <span>TechiFy</span>
              </b>
            </h2>
          </div>
          {/* Third party login */}
          <div>
            <div className="thirdPartyLogin">
              <button>
                <FaGoogle />
                Signup with Google
              </button>
            </div>
            <div className="thirdPartyLogin">
              <button>
                <FaGithub />
                Signup with Github
              </button>
            </div>
          </div>
          <div>
            <img src={or} alt="OR" width="600px" />
          </div>
        </div>
        <form className="loginForm">
          <div className="loginForm_input">
            <input
              type="text"
              placeholder="Enter FullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Enter Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <input
              type="number"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </div>
          <div className="loginForm_checkbox">
            <div className="rememberMe">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <p onClick={() => navigate("/")}>Forgot Password?</p>
          </div>
          <button className="login_btn" onClick={handleRegister}>
            Signup
          </button>
        </form>
        <p className="loginForm_register">
          Have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
