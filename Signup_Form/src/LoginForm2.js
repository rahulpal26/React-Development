import React from 'react'
import { useState } from 'react';

function LoginForm2() {

    const [newvalues, setnewValues] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const array1 = Array(values)
        setnewValues(array1)
        console.log(array1)

    }

    const [values, setValues] = useState(
        {
            Fullname: '',
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <h1>Registeration Form</h1>
                <div>
                    <label>Fullname</label>
                    <input className='input' id='1' name='Fullname' type='text' value={values.Fullname} onChange={handleChange}></input>
                </div>

                <div>
                    <label>Email</label>
                    <input className='input' id='2' name='email' type='email' value={values.email} onChange={handleChange}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input className='input' id='3' name='password' type='password' value={values.password} onChange={handleChange}></input>
                </div>
                <button onClick={handleSubmit}>Signup</button>

                {
                newvalues.map((a) => {
                    return (
                        <div key={a.id}>
                            <p>{a.Fullname}</p>
                            <p>{a.email}</p>
                            <p>{a.password}</p>
                        </div>
                    )
                }
                )
            }


            </form>
           
        </div>
    )
}

export default LoginForm2