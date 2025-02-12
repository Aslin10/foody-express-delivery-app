import React from 'react'
import '../index.css';

export const Beverges = ({element,item,setItem}) => {
  const addCart=()=>{
    const existingProductIndex = item.findIndex((cartItem) => cartItem.name === element.name);

    if (existingProductIndex !== -1) {
      // If product already exists in the cart, increase its quantity
      const updatedItems = [...item];
      updatedItems[existingProductIndex].quantity += 1;
      setItem(updatedItems);
    } else {
      // Add new product to the cart with a default quantity of 1
      setItem([...item, { ...element, quantity: 1 }]);
    }
  }
  return (
    <>
     <div className='element'>
          
          <div className='img'>
 
<img src={element.image}alt={element.name}/>
        </div>
        <div className='details'>
        <h3>{element.name}</h3>
        <p>Price Rs:{element.price}</p>
        <button onClick={addCart}>Add to Cart</button>
        </div>
       

    </div>
    </>
   
  )
}
