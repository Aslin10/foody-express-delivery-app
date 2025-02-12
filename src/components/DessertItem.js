 import React from 'react'
 import '../index.css';

 export const DessertItem = ({e,item,setItem}) => {
 const newname=e.name.length>19?e.name.substring(0,19):e.name;
 
 const addCart=()=>{
  const existingProductIndex = item.findIndex((cartItem) => cartItem.name === e.name);

  if (existingProductIndex !== -1) {
    // If product already exists in the cart, increase its quantity
    const updatedItems = [...item];
    updatedItems[existingProductIndex].quantity += 1;
    setItem(updatedItems);
  } else {
    // Add new product to the cart with a default quantity of 1
    setItem([...item, {...e, quantity: 1 }]);
  }
}

  return (
    <div className='item'>
         <div className='img'>
<img src={e.image}alt={e.name}/>
        </div> 
       <div className='details'>
       <h3>{newname}</h3>
       <p>Price Rs:{e.price}</p>
        <button onClick={addCart}>Add to Cart</button>
        </div>
       

    </div>
   )
 }
