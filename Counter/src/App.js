import './App.css';
import { useState } from 'react';


function App() {
  const[input,SetInput]=useState(0)
  const[error,SetError]=useState('')

  const Increment=()=>{
    SetInput(input+1)
    SetError()
  }

  const Decrement=()=>{
    if(input===0){
      SetError("The Counter cannot count negative values")
    
  }else{SetInput(input-1)
}
};

const Reset=()=>{
  SetInput(0)
  SetError()
}





  return (
    <div className='counter'>
      <h1 className='count'>Counter</h1>
      <h2 className='input'>{input}</h2>
      <h3  id='error'>{error}</h3>
      <div className='buttons'>
      <button className='btn1' onClick={Increment}>+</button>
      <button className='btn2' onClick={Decrement}>-</button>
      <button className='btn3' onClick={Reset}>Reset</button>
      </div>
      
    </div>
  );
}
                                
export default App;