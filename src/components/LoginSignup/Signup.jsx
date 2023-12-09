import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginSignUp.css";


import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
      }
      setName("");
      setEmail("");
      setPassword("");
      history.push("/login");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message); 
    }
    console.log("clicked");
  };
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="forgot-password">
        Already a member?{" "}
        <span>
          <Link to="/login">Login Here!</Link>
        </span>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Signup;
