import React from 'react'
import './Table.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Table(props) {
    const [adddata, DataUpdate] = useState()
    

    useEffect(() => {
        DataUpdate(props.MyData)
    }, [props])

    const click = (index) => {
        const row = [...adddata]
        let confirmation = window.confirm('are you sure want to delete')
        if (confirmation) {
            row.splice(index, 1)
            // DataUpdate(row)
            console.log(index)
            props.deletedata(row)
        }

    }

    const update = (item) => {
        props.updatedata(item)
    }






    return (
        <div >
            <table className='table'>

                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>

                {
                    adddata?.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.Title}</td>
                                <td>{item.Description}</td>
                                <td className='Table-buttons'>
                                    <button className='btn-update' onClick={() => update(item)}>Update</button>
                                    <button className='btn-delete' onClick={() => click(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    )
                }

            </table>
            {/* {Dilogbox && <DilogBox closebox={SetDilogbox} box={props.MyData} />} */}
        </div>
    )
}

export default Table






