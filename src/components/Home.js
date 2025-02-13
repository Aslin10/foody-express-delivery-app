import React from 'react';
import { Link} from 'react-router-dom';
import './home.css';
import Marquee from "react-fast-marquee";




export const Home = () => {
  
  return (
    <div className='home'>
      <div className='Main'>
    <h3>"Indulge in Every Bite and Sip – Premium Meats, Decadent Desserts, and Refreshing Beverages Delivered to You!"</h3>
    <p>"From tender cuts of the finest meats to irresistible desserts and handpicked beverages, we curate the best for your dining table. Elevate every meal with our high-quality selections, crafted for food lovers like you."</p>
    <Marquee className='offers'speed={75}>
    🎉 Get 20% off on all beverages! 🍰 Buy 1 Dessert, Get 1 Free! 🥩 Premium Meat Cuts at Flat 15% Off! 🚚 Free Delivery on Orders Above $50!
  </Marquee>
    <button ><Link to='/Menu'>Shop Now</Link></button>
    </div>
    </div>
    
    
  )
}
