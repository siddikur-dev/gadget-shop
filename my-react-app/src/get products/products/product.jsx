import React, { useState } from "react";
import "./product.css";

const Product = ({ product }) => {
  // Show Hide Data
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <section>
      <div className="card  ">
        <img className="productImg" src={product.image} alt="" />
        {/* <h2>Brand:{product.brand}</h2> */}
        <h3>
          <span className="span">Price:</span> ${product.price}
        </h3>
        <h2 className="phone-model">
          <span className="span">Name: </span>
          {product.brand}
        </h2>

        <button className="btn" onClick={handleShow}>
          {show ? "Hide-Data" : "Show-Data"}
        </button>
        {/* Show Function */}
        {show && (
          <div className="mt-4 p-4 border rounded-lg shadow">
            <h3>
              <span className="span">Model:</span> {product.model}
            </h3>
            <h3>
              <span className="span">Color:</span> {product.color}
            </h3>
            <h3>
              <span className="span">Discount:</span> {product.discount ? `$${product.discount}` : "No-Discount"}
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
