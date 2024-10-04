import React from "react";
const Product = ({pdt}) => {
  return (
    <ul>
      {pdt.map((pd) => (
        <li key={pd.id}>
          <div>{pd.name}</div>
          <img src={'/${pd.imageUrl}'} alt={pd.name} style={{width:'100px' , height:'auto'}}/>
          <div>${pd.price.toFixed(2)}</div>
        </li>
      ))}
    </ul>
  );
};
export default Product;
