import React from "react";
import LoginForm from "../components/LoginForm";
import "./styles/loginPage.css";
import loginImage from "../assets/login.svg";

const Login = () => {
  return (
    <>
      <div className="login_container">
        <div>
          <img src={loginImage} alt="" />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
