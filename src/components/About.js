import React from 'react';
import './About.css';
import foodImg from '../assets/images/food5.png';
import section1Img from '../assets/images/food3.png';
import section2Img from '../assets/images/food2.jpg';

export const About = () => {
  return (
    <div className="about">
      <img src={foodImg} alt="Delicious food display" />
      <h2 className='brand'>
        Welcome to <span>Foody Express</span>
      </h2>
      <h3 className='slogan1'>Your ultimate destination for fresh, delicious, and high-quality food products!</h3>
      
      <div className="section1">
        <img src={section1Img} alt="Ingredients and cooking" />
        <p>
          At Foody Express, we believe that great food begins with the finest ingredients. Our mission is to provide you with a seamless and enjoyable shopping experience, offering a diverse range of products that cater to every taste, diet, and occasion.
        </p>
        <p>
          Whether you’re stocking your pantry with everyday essentials, exploring gourmet ingredients for a special recipe, or seeking organic and locally-sourced options, we’ve got you covered. Our carefully curated selection ensures that every product meets our high standards for quality, freshness, and value.
        </p>
      </div>
      
      <div className="section2">
        <h4>Why choose us?</h4>
        <img src={section2Img} alt="Fresh produce and groceries" />
        <ul>
          <li><strong>Unmatched Variety:</strong> From farm-fresh produce to international delicacies, find everything you need in one place.</li>
          <li><strong>Freshness Guaranteed:</strong> We source our products from trusted suppliers to deliver the best to your table.</li>
          <li><strong>Convenience at Your Fingertips:</strong> Shop online and enjoy fast delivery or in-store pickup options.</li>
          <li><strong>Sustainable Practices:</strong> We’re committed to reducing waste and supporting eco-friendly initiatives.</li>
        </ul>
      </div>
      
      <h3 className='slogan2'>Join the Foody Express community and discover how easy and rewarding food shopping can be. Let’s make every meal extraordinary!</h3>
    </div>
  );
};
