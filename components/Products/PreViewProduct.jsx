import { useEffect, useContext, useState } from "react";
import { BookingContext } from "../context/booking/BookingContext";
import { useRouter } from "next/navigation";

const PreViewProduct = ({ id }) => {
  let [product, setProduct] = useState(null);
  let [personCount, setPersonCount] = useState(1);
  let [counProfetional, setCounProfetional] = useState(1);
  let [timeCondition, setTimeCondition] = useState("Back to Back");
  let [selectedAddOns, setSelectedAddOns] = useState([]);
  let [totalPrice, setTotalPrice] = useState(null);
  let [isDitailsOpen, setIsDitailsOpen] = useState(false);
  const router = useRouter();
  let { setServiceToAdd } = useContext(BookingContext);

  const toggleAddOn = (itemToAddOrRemove) => {
    // Check if the itemToAddOrRemove is already in the selectedAddOns array
    const index = selectedAddOns.findIndex(
      (item) => item.name === itemToAddOrRemove.name
    );

    if (index === -1) {
      // If the item is not in the array, add it
      setSelectedAddOns((prevAddOns) => [...prevAddOns, itemToAddOrRemove]);
    } else {
      // If the item is in the array, remove it
      setSelectedAddOns((prevAddOns) => {
        const updatedAddOns = [...prevAddOns];
        updatedAddOns.splice(index, 1);
        return updatedAddOns;
      });
    }
  };

  useEffect(() => {
    // Calculate the total price by summing up the base product price and the prices of all selected add-ons
    const totalPriceOfAddOns = selectedAddOns.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    const totalPriceWithAddOns = (product?.price || 0) + totalPriceOfAddOns;
    setTotalPrice(totalPriceWithAddOns);
  }, [selectedAddOns, product]);

  let ServiceToAdd = {
    id: product?.id,
    name: product?.name,
    price: product?.price,
    client: personCount,
    timeCondition: timeCondition,
    addOns: selectedAddOns,
    totalPrice: totalPrice * personCount,
  };

  const addPerson = () => {
    if (personCount < 3) {
      setPersonCount(personCount + 1);
    }
  };

  const removeRerson = () => {
    if (personCount > 1) {
      setPersonCount(personCount - 1);
    }
  };
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((res) =>
        setProduct({
          id: 1,
          name: "Blowout",
          description:
            "Work closely with your bridal-certified artist to create your perfect look.",
          duration: 45,
          price: 60,
          type: "hair",
          addOns: [
            {
              name: "Braid",
              description: "Add a braid — French, fishtail, classic + beyond.",
              price: 25,
            },
            {
              name: "Ponytail",
              description: "Add a pony — from high + sleek to low + loose.",
              price: 25,
            },
            {
              name: "Half Up",
              description:
                "Add a chic half-up style. (A favorite for a reason!)",
              price: 25,
            },
            {
              name: "Extensions",
              description: "Need pre-existing extensions styled? We’re on it.",
              price: 25,
            },
            {
              name: "Eye Mask",
              description:
                "Instantly soothe, brighten + hydrate tired under eyes.",
              price: 15,
            },
            {
              name: "Bang Trim",
              description: "Top off your style with a fresh bang trim.",
              price: 25,
            },
            {
              name: "Hair Accessory",
              description:
                "Add your favorite barrettes, gems + beyond. (Note: You must provide the accessories.)",
              price: 25,
            },
            {
              name: "Outdoor Option",
              description:
                "Take it outside! Get glam with a side of fresh air.",
              price: 0,
            },
          ],
          WhatToExpect:
            "After a personalized consultation, your stylist will create your desired look using the latest tools and luxe products.",
          HowToPrepare:
            "Shampoo 10-15 minutes before your appointment. Hair should be clean and damp (but not soaking wet) when your stylist arrives. Please have a place for your stylist to set up near an electrical outlet so they can plug in the necessary hot tools.",
        })
      );
  }, []);

  const addServiceForBooking = () => {
    setServiceToAdd(ServiceToAdd);
    router.push("/booking");
  };

  return (
    <div className="product-pre-view-container">
      <div className="left">
        <h3> {product?.name} </h3>
        <div className="info">
          <div className="duration">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            {product?.duration} mins
          </div>
          <div className="price">${product?.price}</div>
        </div>

        <p>{product?.description}</p>

        <div className="client-number">
          <p>How many clients?</p>

          <div className="count-container">
            <button onClick={() => removeRerson()}> - </button>
            <div>{personCount}</div>
            <button onClick={() => addPerson()}> + </button>
          </div>
        </div>

        {personCount >= 2 && (
          <div className="pro-option-container">
            <div
              onClick={() => setTimeCondition("Back to Back")}
              className={`pro-option-item ${
                timeCondition === "Back to Back" ? "active" : null
              }`}
            >
              <h4>Back to Back</h4>
              <div className="duration">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                {product.duration * personCount} min
              </div>
              <div>1 beauty pro</div>
            </div>
            <div
              onClick={() => setTimeCondition("At the same time")}
              className={`pro-option-item ${
                timeCondition !== "Back to Back" ? "active" : null
              }`}
            >
              <h4>At the same time</h4>
              <div className="duration">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                {product?.duration} mins
              </div>
              <div>{personCount} beauty pro</div>
            </div>
          </div>
        )}

        <button className="cta-button" onClick={() => addServiceForBooking()}>
          Add Service
        </button>

        <div className="details">
          <div
            className="head"
            onClick={() => setIsDitailsOpen(!isDitailsOpen)}
          >
            <strong>Details</strong>
            {isDitailsOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                <g clipPath="url(#a)">
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M6.586 10 8 11.414 9.414 10 15 4.414 13.586 3 8 8.586 2.414 3 1 4.414 6.586 10Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .53h16v11H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M9.414 4.414 8 3 6.586 4.414 1 10l1.414 1.414L8 5.83l5.586 5.585L15 10 9.414 4.414Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .53h16v11H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>

          {isDitailsOpen && (
            <div className="content">
              <h4>How To Prepare?</h4>
              <p>{product.HowToPrepare}</p>
              <h4>What To Expect?</h4>
              <p>{product.WhatToExpect}</p>
            </div>
          )}
        </div>
      </div>

      <div className="right">
        <p>POPULAR ADD-ONS</p>
        {product?.addOns?.map((x, y) => (
          <div
            className={`add-ons-container ${
              selectedAddOns.some((item) => item.name === x.name)
                ? "active"
                : ""
            }`}
            key={y}
          >
            <div className="head">
              <h4>{x.name}</h4>
              <p>${x.price}</p>
            </div>
            <div className="foot">
              <p>{x.description}</p>
              <button onClick={() => toggleAddOn(x)}>
                {selectedAddOns.some((item) => item.name === x.name)
                  ? "Remove"
                  : "Add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreViewProduct;
