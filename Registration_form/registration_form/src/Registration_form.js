import React,{useState} from 'react';
import './Registration_form.css';
import Table from './Table';


const Registration_form=()=> {
const[Formsubmit,Setformsubmit]=useState(true)
const [Errors,Seterrors]=useState({})
const [data,Setdata]=useState([])
const [values,Setvalues]=useState({
  name:'',
  email:'',
  password:'',
  phone:'',
})

const HandleChange=(e)=>{
  Seterrors(validation(values))
   Setvalues({
       ...values,
       [e.target.name] : e.target.value,
   })
}

const HandleSubmit=(e)=>{
    e.preventDefault();
    if(Formsubmit){
    Setdata([...data,values]);
   }
  }


const validation=()=>{
  const error ={}  
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phone = /^(\+\d{1,3}[- ]?)?\d{9}$/
  if(!values.name){
    error.name ='Username is requrired';
    
  }else if(!values.email){
    error.email ='Email is requrired';
    Setformsubmit(false)
  }else if (!email.test(values.email)){
    error.email ='This is not a valid email format';
    Setformsubmit(false) 

  }else if(!values.password){
    error.password ='Password is requrired';
    Setformsubmit(false)
  }else if (values.password >=8){
       error.password ='Password cannot be less than 8 Characters';
       Setformsubmit(false) 

  } else if(!values.phone){
    error.phone ='Phone number is requrired';
    Setformsubmit(false)
    }else if (!phone.test(values.phone)){
    error.phone ='This is not a valid phone number format';
    Setformsubmit(false) 

  }else{
    Setformsubmit(true)
  }

  return error
}


return (
  <>
    <div className="Container">
      
      <h1 className='title'>Registration Form</h1>
      <form>
     
        <label className='label'>Name</label >
         <input name='name' className='input' type='text' value={values.name}  onChange={HandleChange}/>
          <p>{Errors.name}</p>
          
         <label className='label'>Email</label >
         <input name='email' className='input' type='email' value={values.email} onChange={HandleChange}/>
         <p>{Errors.email}</p>

         <label className='label'>Password</label >
         <input name='password' className='input' type='password' value={values.password} onChange={HandleChange}/>
         <p>{Errors.password}</p> 

         <label className='label'>Phone</label >
         <input name='phone' className='input' type='tel' value={values.phone} onChange={HandleChange}/>
         <p>{Errors.phone}</p>

         <button className='Submit' onClick={HandleSubmit}>Submit</button>
      </form>
           
           
        </div>
        <Table data={data}/>  
      </>
   
  );
}

export default Registration_form;



