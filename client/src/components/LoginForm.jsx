import React, { useState } from "react";
import "./styles/loginForm.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import or from "../assets/or.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://user-authentication-system-backend-hazel.vercel.app/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const userRes = await response.json();
      console.log("User Response:", userRes);
      if (userRes.success) {
        navigate("/");
      } else {
        alert(userRes.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
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
                Login with Google
              </button>
            </div>
            <div className="thirdPartyLogin">
              <button>
                <FaGithub />
                Login with Github
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
              placeholder="Enter Username/Email"
              value={formData.emailOrUsername}
              onChange={(e) =>
                setFormData({ ...formData, emailOrUsername: e.target.value })
              }
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="loginForm_checkbox">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <p onClick={() => navigate("/")}>Forgot Password?</p>
          </div>
          <button className="login_btn" onClick={handleLogin}>
            Signin
          </button>
        </form>
        <p className="loginForm_register">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
