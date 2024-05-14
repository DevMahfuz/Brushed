"use client";

import { fetcher } from "../../lib/fetcher";
import useSWR from "swr";
import Loader from "../Loader/Loader";
import "./myappointments.style.css";
const MyAppointments = () => {
  const { data, error, isLoading } = useSWR("/api/my-service", fetcher);

  if (isLoading) return <Loader />;
  if (error) return <div>Error to fetch data</div>;

  if (data.data?.length > 0) {
    return (
      <div>
        {data.data.map((x) => {
          return (
            <div
              className={
                isFutureDate(x.selected_date)
                  ? "booking-item bg-black"
                  : "booking-item"
              }
              key={x.id}
            >
              <h4>{x.service.name}</h4>

              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Extra Service</strong>
                    </td>
                    <td>
                      {x.service.addOns?.map((x) => (
                        <span className="extra-service" key={x.name}>
                          {x.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Date & Time</strong>
                    </td>
                    <td>{convertToLocalTime(x.selected_date)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Location</strong>
                    </td>
                    <td>{x.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Payment Status</strong>
                    </td>
                    <td>
                      {x.payment ? (
                        <span
                          style={{
                            backgroundColor: "green",
                            padding: "2px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          Paid
                        </span>
                      ) : (
                        <span
                          style={{ backgroundColor: "red", padding: "0 5px" }}
                        >
                          Unpaid
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      No Booking History.
      <a href="/services" className="btn">
        Book Now
      </a>
    </div>
  );
};

export default MyAppointments;

function convertToLocalTime(selected_date) {
  // Create a Date object from the selected date string
  const date = new Date(selected_date);

  // Get the local date and time components
  const localDate = date.toLocaleDateString();
  const localTime = date.toLocaleTimeString();

  // Concatenate the local date and time
  const localDateTime = `${localDate} ${localTime}`;

  // Return the local date and time string
  return localDateTime;
}

function isFutureDate(selected_date) {
  // Create Date objects for selected_date and current date
  const selectedDate = new Date(selected_date);
  const currentDate = new Date();

  // Compare selected date with current date
  return selectedDate > currentDate;
}
