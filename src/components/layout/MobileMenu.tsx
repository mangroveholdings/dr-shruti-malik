import React, { useState } from "react";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <Link href="/">
              <h1 className="logo-text">
                <span>Dr.</span> Shruti Malik
              </h1>
            </Link>
          </div>
          <div className="trigger">
            <div className={`hamburger hamburger--slider ${toggle ? "is-active" : ""}`} onClick={() => setToggle(!toggle)}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav" onClick={() => setToggle(false)}>
            <li className="current">
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#service">Service</Link>
            </li>
            <li>
              <Link href="#news">News</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li className="download_cv">
              <Link href="#book-an-appointment">
                <span>Book Appointment</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
