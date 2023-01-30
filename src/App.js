import React from 'react';
import './App.css';
import Cardlist from './component/Cardlist'
import Form from './component/Form'
import Counter from './component/Counter'
function App(){
  return (
    <div className="App">
     <h1 className="App-me">صرافی والکس</h1>
     <Cardlist/>
     <Form/>
    <Counter/>
    </div>
  )
}

export default App;
