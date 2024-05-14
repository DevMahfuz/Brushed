"use client";
import { useState } from "react";
import "./product.style.css";
import PreViewService from "./PreViewService";
const Product = ({ product }) => {
  let [selectProduct, setSelectProduct] = useState(null);
  return (
    <>
      <div className="product-container">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="product-info">
          <div>
            <strong>stating at {product.price} AED</strong>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              {product.duration} mins
            </p>
          </div>
          <button onClick={() => setSelectProduct(product)}>Book Now</button>
        </div>
      </div>

      {selectProduct && (
        <div className="pop-up-product-view">
          <div className="close-product">
            <img
              onClick={() => setSelectProduct(null)}
              src="/img/booking-header-close.svg"
              alt=""
            />
          </div>

          <PreViewService product={selectProduct} />
        </div>
      )}
    </>
  );
};

export default Product;
