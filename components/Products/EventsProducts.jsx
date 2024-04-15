import { useEffect, useState } from "react";
import Product from "./Product";

const EventsProducts = () => {
  const [isProducts, setisProducts] = useState([]);

  useEffect(() => {
    fetch("./api/products")
      .then((res) => res.json())
      .then((res) =>
        setisProducts(res.products.filter((x) => x.type === "events"))
      );
  }, []);

  return (
    <div className="produtcs-container">
      {isProducts?.map((x) => {
        return <Product product={x} key={x.id} />;
      })}
    </div>
  );
};

export default EventsProducts;
