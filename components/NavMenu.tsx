"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./context/User/UserContext";

export default function NavMenu() {
  let [isDropDownOpen, setIsDropDownOpen] = useState(false);
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-menu">
          <Link href="#" onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            Services{" "}
            {isDropDownOpen ? <span> &#11205; </span> : <span>&#11206;</span>}
          </Link>
          <Link href="/membership">Membership</Link>
          <Link href="/weddings">Weddings</Link>

          {isDropDownOpen && <DropDownMenu />}
        </div>
        <div className="mobile-nav">
          {!isMobileMenuOpen ? (
            <svg
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          )}

          {isMobileMenuOpen && (
            <div className="mobile-menu-items">
              <div
                className="mobile-dropdown"
                onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
              >
                <div>Services</div>
                {!isServiceMenuOpen ? (
                  <span>&#43; </span>
                ) : (
                  <span>&#8722; </span>
                )}

                {isServiceMenuOpen && (
                  <ul>
                    <li>
                      <Link href="/booking">Book a Service</Link>
                    </li>
                    <li>
                      <Link href="/how-it-works">How It Works</Link>
                    </li>
                    <li>
                      <Link href="/services">Our Services</Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link href="/membership">Membership</Link>
              <Link href="/weddings">Weddings</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

const DropDownMenu = () => {
  return (
    <div className="drop-down-menue">
      <Link href="/booking">Book a Service</Link>
      <Link href="/how-it-works">How It Works</Link>
      <Link href="/services">Our Services</Link>
      {/* <Link href="/packages">Packages</Link>
      <Link href="/gift-card">Gift Cards</Link> */}
    </div>
  );
};
