"use client";

import { useEffect, useState } from "react";
import Product from "./Product";
import useSWR from "swr";
import Fetcher from "../../components/Fetcher/Fetcher";
import Loader from "../Loader/Loader";

const WeddingsServices = () => {
  let { data, error, isLoading } = useSWR("./api/service/wedding", Fetcher);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return "Fail to fetch data";
  }

  return (
    <>
      <h2>Wedding or Event</h2>
      <div className="produtcs-container">
        {data.data.map((x) => {
          return <Product product={x} key={x.id} />;
        })}
      </div>
    </>
  );
};

export default WeddingsServices;
