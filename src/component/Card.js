
import React, { useState } from 'react';
import './Card.css';
import Price from './Price';

const Card = (props) => {
 
  const [quantity, setquantity] = useState(props.data.quantity)
 
    const addquantity=()=>{
      setquantity(quantity+1)
    }
    const minusquantity=()=>{
      setquantity(quantity-1)
    }
      
    return (
      <div className='cardcss'>
         <h3>{props.data.name}</h3>
         <img className='image' src={props.data.imagePath}/>
         <h4>{props.data.description}</h4>
         <Price price={props.data.price}/>
         <button className='btnadd' onClick={addquantity} name='add'>+</button>
         <span>{quantity}</span>
         <button className='btnadd' onClick={minusquantity} name='minus'>-</button>
       </div>
     )
    }
  


export default Card