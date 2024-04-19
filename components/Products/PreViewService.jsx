import { useEffect, useContext, useState } from "react";
import { BookingContext } from "../context/booking/BookingContext";
import { useRouter } from "next/navigation";

const PreViewService = ({ product }) => {
  let [personCount, setPersonCount] = useState(1);

  let [selectedAddOns, setSelectedAddOns] = useState([]);
  let [totalPrice, setTotalPrice] = useState(null);
  const router = useRouter();
  let { setServiceToAdd } = useContext(BookingContext);
  const addOns = [
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
      description: "Add a chic half-up style. (A favorite for a reason!)",
      price: 25,
    },
    {
      name: "Extensions",
      description: "Need pre-existing extensions styled? We’re on it.",
      price: 25,
    },
    {
      name: "Eye Mask",
      description: "Instantly soothe, brighten + hydrate tired under eyes.",
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
      description: "Take it outside! Get glam with a side of fresh air.",
      price: 0,
    },
  ];

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

  const addServiceForBooking = () => {
    setServiceToAdd(ServiceToAdd);
    router.push("/booking");
  };

  return (
    <div className="product-pre-view-container">
      <div className="left">
        <h3> {product?.name} </h3>
        <div className="info">
          <div className="price">{product?.price} AED</div>
        </div>

        <div className="client-number">
          <p>How many clients?</p>

          <div className="count-container">
            <button onClick={() => removeRerson()}> - </button>
            <div>{personCount}</div>
            <button onClick={() => addPerson()}> + </button>
          </div>
        </div>

        <button className="cta-button" onClick={() => addServiceForBooking()}>
          Add Service
        </button>
      </div>

      <div className="right">
        <p>POPULAR ADD-ONS</p>
        {addOns.map((x, y) => (
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

export default PreViewService;
