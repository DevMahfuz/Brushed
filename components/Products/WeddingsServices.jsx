"use client";

import { useEffect, useState } from "react";
import Product from "./Product";

const WeddingsServices = () => {
  const [isProducts, setisProducts] = useState([]);

  useEffect(() => {
    fetch("./api/service/wedding")
      .then((res) => res.json())
      .then((res) => setisProducts(res.data));
  }, []);

  console.log("isProducts", isProducts);
  return (
    <>
      <h2>Wedding or Event</h2>
      <div className="produtcs-container">
        {isProducts?.map((x) => {
          return <Product product={x} key={x.id} />;
        })}
      </div>
    </>
  );
};

export default WeddingsServices;
