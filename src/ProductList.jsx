
import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";

const ProductList = () => {
  const { products } = useContext(AppContext);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="productlist">
      {products.map((data) => (
        <div className="card" key={data.id}>
          <div>{data.id}</div>
          <h4>price:{data.price}</h4>
          <img className="img" src={data.image} />
        </div>
      ))}
    </div>
  );
}; 

export default ProductList;
