import React, { useState } from 'react';


const  Counter= () => {
    const [num, setnum] = useState(0)
const reset=()=>{
setnum('')
}
const addthree=()=>{
    setnum((prev)=>prev+1)
    setnum((prev)=>prev+1)
    setnum((prev)=>prev+1)
}

  return (
    <div>
        <label>{num}</label>
        <button onClick={addthree}>x3</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter