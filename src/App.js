
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import {Home} from './components/Home';
import {About}from './components/About'
import { Menu } from './components/Menu';
import{Contact} from './components/Contact';
import { useState } from 'react';
import { Footer } from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';




function App() {
  const [item,setItem]=useState([]);
  const [user, setUser] = useState(localStorage.getItem("foodyLoggedInUser") || null);
  return (
    <>
    <BrowserRouter>
    <Header size={item.length} user={user} setUser={setUser} />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Menu" element={<Menu item={item} setItem={setItem}/>}/>
        <Route path="/Cart" element={<Cart item={item} setItem={setItem}/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login setUser={setUser} />} />
        



      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
    </>
   
    
  );
}

export default App;
