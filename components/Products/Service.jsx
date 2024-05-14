import { useState } from "react";
import "./product.style.css";
import PreViewService from "./PreViewService";
const Service = ({ product }) => {
  let [selectProduct, setSelectProduct] = useState(null);

  return (
    <>
      <div className="product-container">
        <h4>{product.name}</h4>
        <div className="product-info">
          <div>
            <strong>{product.price} AED</strong>
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

export default Service;
