import React from "react";
function Category(props) {
 
  return (
    <tbody>
      <tr>
        <th>Sporting Goods</th>
      </tr>

      {(props.state)?.map((data) => {
        if (data.category === "Sporting Goods") {
          return (
            <tr
              style={
                data.stocked === true ? { color: "black" } : { color: "red" }
              }
            >
              <td>{data.name}</td>
              <td>{data.price}</td>
            </tr>
          );
        } else {
          return <div></div>;
        }
      })}
    </tbody>
  );
}

export default Category;    
