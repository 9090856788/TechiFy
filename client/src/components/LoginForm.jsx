import React from "react";
import "./styles/loginForm.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import or from "../assets/or.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

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
            <input type="text" placeholder="Enter Username/Email" />
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="loginForm_checkbox">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <p onClick={() => navigate("/")}>Forgot Password?</p>
          </div>
          <button type="submit" className="login_btn">Signin</button>
        </form>
        <p className="loginForm_register">
          Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
