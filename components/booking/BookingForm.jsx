"use client";

import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";
import { BookingContext } from "../context/booking/BookingContext";

import "react-datepicker/dist/react-datepicker.css";

import "./bookingForm.style.css";
import Link from "next/link";

const MultiStepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const { serviceToAdd } = useContext(BookingContext);

  useEffect(() => {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(25.0637, 55.1374), // Southwest corner of Dubai
      new google.maps.LatLng(25.276987, 55.373655) // Northeast corner of Dubai
    );

    var input = document.getElementById("searchTextField");

    var searchBox = new google.maps.places.SearchBox(input, {
      bounds: defaultBounds,
    });
  }, []);

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmitAddress = () => {
    // Handle address submission, for now just proceed to the next step
    setStep(2);
  };

  const onSubmitDateTime = () => {
    // Handle date and time submission, for now just proceed to the next step
    setStep(3);
  };

  const onSubmitDetails = () => {
    // Handle details submission, for now just proceed to the next step
    setStep(4);
  };

  const onSubmitPayment = async () => {
    try {
      // Call payment API
      const response = await axios.post("/api/payment", {
        // Pass any required payment data
      });
      if (response.data.success) {
        // Payment successful, proceed to submit the form
        setPaymentStatus("success");
        onSubmitForm();
      } else {
        // Payment failed, display error message
        setPaymentStatus("error");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error, display error message
      setPaymentStatus("error");
    }
  };

  const onSubmitForm = async () => {
    // Handle form submission, send data to server
    try {
      const response = await axios.post("/api/booking", {
        address: address,
        selected_date: selectedDate,
        note: textareaValue,
        address_type: selectedOption,
        service: serviceToAdd,
        payment: true,
      });
      console.log(response);
      // Optionally, reset form or show success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, show error message
    }
  };

  return (
    <div className="booking-form-wrapper">
      <button
        className="back-button"
        disabled={step === 1}
        onClick={handleBack}
      >
        Back
      </button>

      {!serviceToAdd && (
        <div className="alert-to-ad-service">
          <h2>First Choose The Service For Booking</h2>
          <Link href="/services" className="btn-next">
            Check Our Service Here
          </Link>
        </div>
      )}
      <div>
        <br />
        <progress value={step} max="4" />
      </div>

      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmitAddress)}>
          <h2>Where do you want to book?</h2>
          <p>Enter your address below (Dubai City)</p>
          <input
            id="searchTextField"
            type="search"
            placeholder="Enter your address in Dubai City"
            {...register("address", { required: true })}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && (
            <span className="error-msg">This field is required.</span>
          )}
          <button className="btn-next" type="submit">
            Next Step
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmitDateTime)}>
          <h2>When do you want to book?</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            required
            placeholderText="Date & Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <button className="btn-next" type="submit">
            Next Step
          </button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmitDetails)}>
          <h2>Any special directions?</h2>
          <textarea
            placeholder="Enter additional details"
            {...register("details")}
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <h2>What type of location is this?*</h2>
          <div className="radio">
            <label htmlFor="option1">
              <input
                type="radio"
                id="option1"
                name="options"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={() => setSelectedOption("option1")}
              />{" "}
              Home
            </label>

            <label htmlFor="option2">
              <input
                type="radio"
                id="option2"
                name="options"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={() => setSelectedOption("option2")}
              />{" "}
              Hotel
            </label>

            <label htmlFor="option3">
              <input
                type="radio"
                id="option3"
                name="options"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={() => setSelectedOption("option3")}
              />{" "}
              Office
            </label>

            <label htmlFor="option4">
              <input
                type="radio"
                id="option4"
                name="options"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={() => setSelectedOption("option4")}
              />{" "}
              Other
            </label>
          </div>
          <button className="btn-next" type="submit">
            Next Step
          </button>
        </form>
      )}
      {step === 4 && (
        <form onSubmit={handleSubmit(onSubmitForm)}>
          {/* Payment form inputs go here */}
          <div className="service-card-box">
            <div className="service-card-row">
              <h3>{serviceToAdd.name}</h3>
              <strong>${serviceToAdd.price}</strong>
            </div>

            {serviceToAdd.addOns?.map((x, y) => (
              <div className="service-card-row" key={y}>
                <div>{x.name}</div>
                <div>${x.price}</div>
              </div>
            ))}
            <div className="service-card-row">
              <div>Client</div>
              <div>{serviceToAdd.client}</div>
            </div>
            <div className="service-card-row">
              <strong>Total</strong>
              <strong>${serviceToAdd.totalPrice}</strong>
            </div>
          </div>

          <button className="btn-next" type="submit">
            Book now
          </button>
        </form>
      )}
      {paymentStatus === "error" && (
        <div>Payment failed. Please try again or contact support.</div>
      )}
    </div>
  );
};

export default MultiStepForm;
