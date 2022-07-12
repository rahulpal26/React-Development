import React from "react";
function Electronics(props) {
  return (
    <tbody>
      <tr>
        <th>Electronics</th>
      </tr>

      {(props.state )?.map((data) => {
        if (data.category === "Electronics") {
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

export default Electronics;
