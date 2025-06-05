import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./styles/loginPage.css";
import loginImage from "../assets/login.svg";

const Register = () => {
  return (
    <>
      <div className="login_container">
        <div>
          <RegisterForm />
        </div>
        <div>
          <img src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
