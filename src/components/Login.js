import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
        setMessage("Please fill in all required fields.");
        return;
      }
    const users = JSON.parse(localStorage.getItem("foodyUsers")) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem("foodyLoggedInUser", email);
      setMessage("Login successful!");
      setUser(email);
      setTimeout(() => navigate("/"), 1000);
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
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
      <button onClick={handleLogin} className="btn btn-login">
        Login
      </button>
      <p className="message">{message}</p>
    </div>
  );
};

export default Login;
