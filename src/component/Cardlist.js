import React, { useState } from 'react';

import './Cardlist.css';
import Card from './Card';


const products = [
    {
      id: 1,
      quantity:1,
      name: "WIN",
      price: 500,
      imagePath:
        "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FWIN.svg&w=48&q=75",
    },
    {
      id: 2,
      quantity:1,
      name: "MANA",
      price: 600,
      imagePath:
        "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FMANA.svg&w=32&q=75",
    },
    {
        id: 3,
        quantity:1,
        name: "DOT",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FDOT.svg&w=48&q=75",
      },
    {
      id: 4,
      quantity:1,
      name: "SUSHI",
      price: 700,
      imagePath:
        "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FSUSHI.svg&w=32&q=75",
    },
    {
        id: 5,
        quantity:1,
        name: "CELR",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FCELR.svg&w=32&q=75",
      },
      {
        id: 6,
        quantity:1,
        name: "ALICE",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FALICE.svg&w=32&q=75",
      },
      {
        id: 7,
        quantity:1,
        name: "CAKE",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FCAKE.svg&w=32&q=75",
      },
      {
        id: 8,
        quantity:1,
        name: "PUNDIX",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FPUNDIX.svg&w=32&q=75",
      },
      {
        id: 9,
        quantity:1,
        name: "BURGER",
        price: 700,
        imagePath:
          "https://wallex.ir/_next/image?url=%2Fimages%2Fcoins%2FBURGER.svg&w=32&q=75",
      },
      
  ];
const Cardlist = () => {
  
  
  return (
    <div className='flexboxofproducts'>
        
            
     {products.map((item) => {
        return (
        <div>
       <Card data={item} />
       
       </div>
        );
      })}
    
</div>
  )
    }

export default Cardlist