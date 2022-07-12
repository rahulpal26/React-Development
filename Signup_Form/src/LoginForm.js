import React from 'react'                     // Reference-Sign Up Form Validation Using React in 2022
import { useState } from 'react'
import './LoginForm.css'




function LoginForm() {
    const[data,setNewdata]=useState([])
    

    const handleSubmit = (event) => {
    event.preventDefault();
   
    const array1 = Array(values)
    setNewdata(array1)
//    console.log(array1)

   const updateData =[...data]
//    console.log(updateData)

   updateData.push(values)
   setNewdata(updateData)
     console.log(data);
   

   
 
}


    const  [values, setValues] = useState({
        Fullname: '',
        email: '',
        password: '',
        Date: '',
        Gender: '',
        Language: '',
        Language1: ''
    });

   

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        
            
        });

    }

    return (
        <div className='container'>
           
            <form className='form'>
                <h1>Create Registration</h1>
                <div className='Fullname'>
                    <label>Full Name</label>
                    <input className='input' id='1'name='Fullname' type='text' value={values.Fullname} 
                     onChange={handleChange} />
                </div>

                <div className='email'>
                    <label>Email</label>
                    <input className='input' id='2'name='email' type='email' value={values.email}
                     onChange={handleChange} />
                </div>

                <div className='password'>
                    <label>Password</label>
                    <input className='input' id='3'name='password' type='password' value={values.password} 
                     onChange={handleChange} />
                </div>

                <div className='Date'>
                    <label>Date</label>
                    <input className='input' id='4'name='Date' type='Date' value={values.Date} 
                     onChange={handleChange} />
                </div>

                <div className='Male'>
                    <label>Male</label>
                    <input className='input_1' id='5'name='Gender' type='radio' value='Male' 
                     onChange={handleChange} />
                    <label>Female</label>
                    <input className='input_1' id='6'name='Gender' type='radio' value='female' 
                     onChange={handleChange} />
                </div>

                <div className='Java'>
                    <label>Java</label>
                    <input className='input_1' id='7'name='Language' type='checkbox' value='java' 
                     onChange={handleChange} />
                </div>

                <div className='Javascript'>
                    <label>Javascript</label>
                    <input className='input_1' id='8'name='Language1' type='checkbox' value='javascript' 
                     onChange={handleChange} />
                </div>

                <button onClick={handleSubmit}>Sign Up</button>

                {           
                      data.map( (cur)=>{ 
                              return(
                                  
                                  <div className='table'>
                                      
                                      <ul>{cur.Fullname}</ul>
                                      <ul>{cur.email}</ul>
                                      <ul>{cur.password}</ul>
                                      <ul>{cur.Date}</ul>
                                      <ul>{cur.Gender}</ul>
                                      <ul>{cur.Language}</ul>
                                      <ul>{cur.Language1}</ul>
                                      
                                  </div> 
                              )
                          }
                      )
                  }
            </form>
            
            <div  >
                 
           </div>
           </div>
    )
}

export default LoginForm

