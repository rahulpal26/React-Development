import { items } from "./ItemList";
import React, { useState } from "react";
import Category from "./Category";
import Electronics from "./Electronics";

export default function App() {
  const [state, setState] = useState(items);
  const [showdata, setShowdata] = useState(false);
  const [total, setTotal] = useState();
  const [totalcount, setTotalcount] = useState();
  const [filteredData, setFiltereddata] = useState();

  const handleClick = () => {
    setShowdata(true);
 {
      const mydata = state.filter((val) => {
        if (val.stocked ) {
          return val;
  }
  });
      if (showdata) {
        setState(items);
        setShowdata(false);
      } else {
        setState(mydata);
      }
    }
  };

  const handleSearch = (e) => {
    {
  var finaldata = items.filter((row) => {
        if (row.name.toLowerCase().includes(e.target.value)) {
          return row;
        }
      });
      // setState(finaldata);
      // setFiltereddata(true);
      // console.log(finaldata);
      if (filteredData) {
        setState(items);
        setFiltereddata(false);
      } else {
        setState(finaldata);
        setFiltereddata(true);
        
      }
      
    const totaldata = finaldata.filter((row) => row.name).length;
      setTotalcount(totaldata);
    }

    let mapped = (finaldata || state).map((e) => e.price);
    let str = mapped.join("");
    var data = str.replace(/\$/g, " ");
    let arr = data.split(" ");
    var sum = arr.reduce((a, b) => a + Number(b), 0);
    setTotal(sum);
  
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <input type="text" placeholder="total Search..." value={totalcount} onChange={handleSearch} />
      <br></br>
      <input type="checkbox" onClick={handleClick} />
      Only show products in stock
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <Category state={state} />
        <Electronics state={state} />
        <td>
          <b>Total Price</b>
        </td>
        <td>
          <p>${total}</p>
         
        </td>
      </table>
    </div>
  );
}
