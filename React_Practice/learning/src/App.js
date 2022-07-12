import React,{useState} from 'react'
import {items} from  './Items'


function App(){
   const [first, setfirst] = useState(items)
 
   let Data=first.map((val)=> val.category)

  return(
    <div>
        <h1>{Data}</h1>
        
    </div>
  )
}

export default App