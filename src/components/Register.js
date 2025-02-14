import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
        setMessage("Please fill in all required fields.");
        return;
      }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("foodyUsers")) || [];
    if (users.find((user) => user.email === email)) {
      setMessage("User already exists!");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("foodyUsers", JSON.stringify(users));
    setMessage("Registration successful! You can now log in.");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input-field"
      />
      <div className="click-button">
      <button onClick={handleRegister} className="btn btn-register">
        Register
      </button>
      <button onClick={() => navigate("/login")} className="btn btn-login">
        Login
      </button>
      </div>
      <p className="message">{message}</p>
   
    </div>
  );
};

export default Register;