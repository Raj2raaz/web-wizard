import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import './LoginSignUp.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


function Login({setUser}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
              } 
              
              const data = await response.json();
              console.log(data);
              setUser(data); // Assuming 'data' contains user information, including the name
              history.push('/');
            } catch (error) {
              console.error("Fetch error:", error.message);
        }
        console.log("clicked")
    }
    
  return (
    <div className = 'container'>
    <div className="header">
        <div className="text">Log in</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
    
        <div className="input">
            <img src={email_icon} alt="" />
            <input 
            type="email" 
            placeholder='Email Id'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input
             type="password" 
             placeholder='Password'
             value={password}
             onChange={e => setPassword(e.target.value)}
             />
        </div>
    </div>
   
    <div className="forgot-password">Not having Account? <span><Link to="/signup">SignUp Here!</Link></span></div>
    
    <div className="submit-container">
        
        <div className="submit" onClick={handleLogin}>Log in</div>
    </div>
</div>
  )
}

export default Login
