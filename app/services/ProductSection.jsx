"use client";

import React, { useEffect, useRef, useState } from "react";
import MenService from "../../components/Products/MenServices";
import WomenServices from "../../components/Products/WomenServices";
import WeddingsServices from "../../components/Products/WeddingsServices";

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
    { label: "Men", id: 0 },
    { label: "Women", id: 1 },
    { label: "Wedding/Event", id: 2 },
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
          <MenService />
        </div>
        {/* content of section 1 */}
      </section>
      <section ref={sectionRefs[1]} id="section2">
        <div className="container">
          <WomenServices />
        </div>
        {/* content of section 2 */}
      </section>

      <section ref={sectionRefs[2]} id="section4">
        <div className="container">
          <WeddingsServices />
        </div>
        {/* content of section 4 */}
      </section>
    </>
  );
};

export default ProductSectionComponent;
