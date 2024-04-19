import { useEffect, useState } from "react";

import Service from "./Service";

const MenService = () => {
  const [isProducts, setisProducts] = useState([]);

  useEffect(() => {
    fetch("./api/service/men")
      .then((res) => res.json())
      .then((res) => setisProducts(res.data));
  }, []);

  return (
    <>
      <h2>For Men</h2>
      {isProducts?.map((x, y) => {
        return (
          <div>
            <h3 style={{ color: "#4a686a", fontSize: "30px" }}>{x.cetagory}</h3>
            <div className="produtcs-container">
              {x.services.map((i, j) => (
                <Service product={i} key={j} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenService;
