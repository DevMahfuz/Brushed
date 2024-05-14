"use client";

import { createContext, useState } from "react";

export const BookingContext = createContext({
  serviceToAdd: null,
  setServiceToAdd: () => null,
  // step: null,
  // setStep: () => null,
  // serviceAddress: null,
  // setServiceAddress: () => null,
  // serviceAddressType: null,
  // setServiceAddressType: () => null,
  // serviceTime: undefined,
  // setServiceTime: () => null,
  // textareaValue: null,
  // setTextareaValue: () => null,
  // selectedOption: null,
  // setSelectedOption: () => null,
  // paymentStatus: false,
  // setPaymentStatus: () => null,
});

export const BookingProvider = ({ children }) => {
  const [serviceToAdd, setServiceToAdd] = useState(null);
  // const [serviceAddress, setServiceAddress] = useState("");
  // const [serviceAddressType, setServiceAddressType] = useState("");
  // const [serviceTime, setServiceTime] = useState("");
  // const [step, setStep] = useState(1);

  const value = {
    serviceToAdd,
    setServiceToAdd,
    // serviceAddress,
    // setServiceAddress,
    // serviceAddressType,
    // setServiceAddressType,
    // serviceTime,
    // setServiceTime,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
