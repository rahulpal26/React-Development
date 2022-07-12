import React from 'react'
import './Table.css'

function DilogBox({closebox}) {
  return (
    <div className='dilogbox'>
        <button onClick={()=>closebox(false)}>X</button>
        <p >Are you sure you want to Cancel it!</p>
        <button>Confirm</button>
        

    </div>
  )
}

export default DilogBox


