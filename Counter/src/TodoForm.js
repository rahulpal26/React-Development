import React from 'react'
import { useState } from 'react'

function TodoForm() {
const[input,SetInput]=useState('')
const HandleSubmit=(e)=>{
    e.preventDefault()
}


  return (
    <div>
     <form>
         <h1>Todo List</h1>
         <input type='text' name='text' placeholder='add a todo'value={input}   />
         <button onClick={HandleSubmit}>AddTodo</button>
     </form>
    </div>
  );
}

export default TodoForm