"use client";

import axios from "axios";

const DeleteBooking = ({ id }) => {
  const deleteHandeler = async () => {
    const result = await axios.delete("/api/booking?id=14", {});
    console.log(result);
  };

  return <button onClick={deleteHandeler}>Delete</button>;
};

export default DeleteBooking;
