import React from 'react'

function LoginForm3() {

    const handleSubmit=(e)=>{
      e.preventDefault();
    }

  return (
    <div>
         <form>
             <div>
             <label>Fullname</label>
             <input name='Fullname' type='text' value=''/>
             </div>

             <div>
             <label>Email</label>
             <input name='Fullname' type='email' value=''/>
             </div>

             <div>
             <label>Password</label>
             <input name='Fullname' type='password' value=''/>
             </div>

             <button onClick={handleSubmit}>Signup</button>
         </form>
    </div>
  )
}

export default LoginForm3