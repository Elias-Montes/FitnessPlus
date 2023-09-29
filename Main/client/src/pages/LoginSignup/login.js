import React, { useState } from "react";
import "./loginSignup.css";

import user_icon from "../../component/Assets/person.png";
import email_icon from "../../component/Assets/email.png";
import password_icon from "../../component/Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="pageColor">
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Forgot Password? <span>Click Here</span>
            </div>
          )}
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign UP
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            {" "}
            Login
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginSignup;
