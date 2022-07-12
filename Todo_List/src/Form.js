import React from 'react'
import './Form.css'
import Table from './Table'
import { useState } from 'react'

function Form() {

    const [data, setNewdata] = useState([])
    const [values, setValues] = useState({
        id: '',
        Title: '',
        Description: ''
    })

    const handleChange = (e) => {
        e.preventDefault();

        setValues({
            ...values, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewdata([...data, values])
    }
    const savedata = (e) => {
       e.preventDefault();
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === values.id) {
                data[i]=values
            }
            setNewdata([...data])
        }
       
    }

    const Sort=()=>{
        // e.preventDefault();
      let Shorted=[...data]
      Shorted.sort((a,b)=>a.id-b.id)
      setNewdata(Shorted)
      console.log('dfddf');
    }  

    
    

    return (

        <div>
            <form className='todo' >
                <h1 className='head'>Todo-List</h1>
               
                <div className='Auto'>
                    <label className='label'>ID</label>
                    <input className='input' type='number' name='id'
                        value={values.id} placeholder='id' onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label className='label'>Title</label>
                    <input className='input' type='text' name='Title'
                        value={values.Title} placeholder='Title' onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label className='label'>Description</label>
                    <input className='input' type='text' name='Description'
                        value={values.Description} placeholder=' Description' onChange={handleChange}>
                    </input>
                </div>
                <button className='create' type='submit' onClick={handleSubmit} >Create</button>
                
                <button className='save' onClick={savedata}>Save</button>

                
               
            </form>
            <button type='button' onClick={Sort}>Sort</button>
            <Table MyData={data} updatedata={(values) => setValues(values)} deletedata={(data) => setNewdata(data)} />
        </div>

    )
}

export default Form