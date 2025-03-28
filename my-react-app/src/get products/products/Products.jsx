import React, { use } from "react";
import Product from "./product";
import "./product.css";

const Products = ({ fetchProductPromise }) => {
  const productPromise = use(fetchProductPromise);
  const produscts = productPromise.products;
  return (
    <div>
      <h1>All Products:{produscts.length}</h1>
{
          <div className="productContainer">
            {produscts.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>}
    </div>
  );
};

export default Products;
