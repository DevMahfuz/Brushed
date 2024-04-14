"use client";

import { createContext, useState } from "react";

export const BookingContext = createContext({
  serviceToAdd: [],
  serviceAddress: undefined,
  serviceAddressType: undefined,
  serviceTime: undefined,
});

export const BookingProvider = ({ children }) => {
  const [serviceToAdd, setServiceToAdd] = useState(null);
  const [serviceAddress, setServiceAddress] = useState("");
  const [serviceAddressType, setServiceAddressType] = useState("");
  const [serviceTime, setServiceTime] = useState("");

  const value = {
    serviceToAdd,
    setServiceToAdd,
    serviceAddress,
    setServiceAddress,
    serviceAddressType,
    setServiceAddressType,
    serviceTime,
    setServiceTime,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
