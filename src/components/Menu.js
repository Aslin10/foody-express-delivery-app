import React, { useState } from 'react';
import data from "../assets/data.json";
 import dessert from "../assets/dessert.json";
import drinks from "../assets/beverges.json"
import { Product } from './Product';
import { DessertItem } from './DessertItem';
import { Beverges } from './Beverges';
import "./Menu.css";

export const Menu = ({item,setItem}) => {
  const [products]=useState(data);
   const[items]=useState(dessert)
  const[drink]=useState(drinks)
  return (
<>
<h2 className='categories'>Meat & Poultry</h2>
    <div className='product-container'>
      
      {products.map((product)=>(
        <Product key={product.idCategory} product={product} item={item} setItem={setItem}/>
      ))}
      </div>
      <hr/>
      <h2 className='categories'>Desserts</h2>
      <div className='dessert-container'>
       
       {items.map((e) => {
  const image = require(`../assets/images/${e.image}.jpg`);
  return <DessertItem key={e.idCategory}  e={{ ...e, image }}item={item} setItem={setItem} />;
})}
</div>
<hr/>
<h2 className='categories'>Beverages</h2>
<div className='Beverages-container'>



{drink.map((element) => {
  const image = require(`../assets/images/${element.image}.jpg`);
  return <Beverges key={element.idCategory} element={{ ...element, image }} item={item} setItem={setItem}/>;
})}

</div>
</> 
  )
}
