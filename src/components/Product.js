import React from 'react'
import '../index.css';

export const Product = ({product,item,setItem}) => {
  const addCart=()=>{
    const existingProductIndex = item.findIndex((cartItem) => cartItem.name === product.name);

    if (existingProductIndex !== -1) {
      // If product already exists in the cart, increase its quantity
      const updatedItems = [...item];
      updatedItems[existingProductIndex].quantity += 1;
      setItem(updatedItems);
    } else {
      // Add new product to the cart with a default quantity of 1
      setItem([...item, { ...product, quantity: 1 }]);
    }
  }
  return (<>
  
<div className='product'>
        
        <div className='img'>
<img src={product.image}alt={product.name}/>
        </div>
        <div className='details'>
        <h3>{product.name}</h3>
        <p>Price Rs:{product.price}</p>
        <button onClick={addCart}>Add to Cart</button>
        </div>
       

    </div>

  </>
   
    
  )
}
