import React, {  useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo gif.gif';
import './Header.css';
import "./Register.css";
import { Home, Phone, Menu, Info, ShoppingCart,User ,UserPlus,LogOut} from "lucide-react";



export const Header = ({ size, user, setUser}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const navigate = useNavigate();

 
  const handleLogout = () => {
    localStorage.removeItem("foodyLoggedInUser");
    setUser(null);
     navigate("/login");
    
  };


  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="brand-name">Foody Express</p>
        </div>
       

      
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}><Home size={20} />
          Home</Link></li>
          <li><Link to="/About" onClick={() => setIsOpen(false)}><Info size={20} /> About</Link></li>
          <li><Link to="/Menu" onClick={() => setIsOpen(false)}><Menu size={20} />
          Menu</Link></li>
          <li>
            <Link to="/Cart" onClick={() => setIsOpen(false)}>
              <span className="cart-size">{size}</span><ShoppingCart size={20} />View Cart
            </Link>
          </li>
          <li><Link to="/Contact" onClick={() => setIsOpen(false)}>
          <Phone size={20} />
          Contact Us</Link></li>
          {user && (
            <li><Link to="/" onClick={() => setIsOpen(false)}><User size={20} /> Profile</Link></li>
          )}
          </ul>
        
        
       
          <div className="auth-buttons">
          {user ? (
            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={18} /> Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="login-btn"><User size={18} /> Login</Link>
              <Link to="/register" className="register-btn"><UserPlus size={18}/> Register</Link>
            </>
          )}
        </div>
        
        
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

       
      
    </nav>
  );
}; 
