import React, { useState } from 'react';


const Form = (props) => {
    const [inputdata, setinputdata] = useState({type:'' , amount:0})
    
    const changcurrency=(e)=>{
        setinputdata((prev)=>{return{...prev, type:e.target.value}})
        
    }
    const changequantity=(e)=>{
        setinputdata((prev)=>{return{...prev, amount:e.target.value}})
        
    }
    
  return (
    
    <form>
        <div>
            <label>Currency</label>
            <input type="text" onChange={changcurrency}/>
            <div>{inputdata.type}</div>

        </div>

        <div>
            <label>quantity</label>
            <input type="number" onChange={changequantity}/>
            <div>{inputdata.amount}</div>
        </div>
        <button>Add</button>
    </form>
  )
}

export default Form