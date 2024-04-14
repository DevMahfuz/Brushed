"use client";

import React, { useEffect, useRef, useState } from "react";
import HairProdutcs from "../../components/Products/HairProducts";
import MakeupProducts from "../../components/Products/MakeupProducts";
import NailsProducts from "../../components/Products/NailsProducts";
import EventsProducts from "../../components/Products/EventsProducts";
import WeddingsProducts from "../../components/Products/WeddingsProducts";

const ProductSectionComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()]; // create refs for each section

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section whose top and bottom are within the viewport
      const activeIndex = sectionRefs.findIndex((ref) => {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const bottom = top + ref.current.offsetHeight;
          return scrollPosition >= top && scrollPosition < bottom;
        }
        return false;
      });

      setActiveSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  const handleMenuItemClick = (index, event) => {
    // Prevent default anchor behavior
    event.preventDefault();

    // Scroll to the selected section
    if (sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index); // Update active section immediately after scrolling
    }
  };

  const menuItems = [
    { label: "Hair", id: 0 },
    { label: "Makeup", id: 1 },
    { label: "Nails", id: 2 },
    { label: "Events", id: 3 },
    { label: "Weddings", id: 4 },
  ];
  return (
    <>
      <div className="service-avigation">
        <div className="container">
          <div>
            Services in: <strong>Dubay City</strong>
          </div>
          <ul>
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className={activeSection === menuItem.id ? "active" : ""}
                onClick={(e) => handleMenuItemClick(menuItem.id, e)}
              >
                <a href={`#section${menuItem.id + 1}`}>{menuItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section ref={sectionRefs[0]} id="section1">
        <div className="container">
          <HairProdutcs />
          <div className="extra-offer">
            <p>Add a little something extra</p>
            <h3>
              Select your service, then choose from add-ons like extensions,
              braids, and half-up styles.
            </h3>
          </div>
        </div>
        {/* content of section 1 */}
      </section>
      <section ref={sectionRefs[1]} id="section2">
        <div className="container">
          <MakeupProducts />
          <div className="extra-offer">
            <p>Amp up your makeup</p>
            <h3>
              Select your service, then choose from add-ons like false lashes
              and airbrush.
            </h3>
          </div>
        </div>
        {/* content of section 2 */}
      </section>
      <section ref={sectionRefs[2]} id="section3">
        <div className="container">
          <NailsProducts />
          <div className="extra-offer">
            <p>Elevate your mani-pedi</p>
            <h3>
              Select your service, then choose from add-ons like spa pedis,
              shellac, and gel service.
            </h3>
          </div>
        </div>
        {/* content of section 3 */}
      </section>
      <section ref={sectionRefs[3]} id="section4">
        <div className="container">
          <EventsProducts />
          <div className="extra-offer">
            <p>We got this covered</p>
            <h3>
              Whether you have a group of 4 or 400, our dedicated concierge team
              will tailor your event experience to your needs.
            </h3>
          </div>
        </div>
        {/* content of section 4 */}
      </section>
      <section ref={sectionRefs[4]} id="section5">
        <div className="container">
          <WeddingsProducts />
          <div className="extra-offer">
            <p>Beauty for every moment</p>
            <h3>
              From your engagement photos to the big day, we're here for you
              every step of the way.
            </h3>
          </div>
        </div>
        {/* content of section 5 */}
      </section>
    </>
  );
};

export default ProductSectionComponent;
