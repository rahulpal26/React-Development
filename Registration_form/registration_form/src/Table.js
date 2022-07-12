import './Table.css'

function Table(props) {

  let mdata=props.data


  return (
    <>
    <div>
            
 <table className='Table'>
  <thead className='head'>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Phone</th>
  </thead>
   
    
        {
            mdata.map((e)=>{
                return(
                    <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    <td>{e.phone}</td>
                    </tr>
                )
            })
        }
        
   
</table>
    </div>
    </>
  )
}

export default Table