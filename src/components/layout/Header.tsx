import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <Link href="/">
              <h1 className="logo-text">
                <span>Dr.</span> Shruti Malik
              </h1>
            </Link>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
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
              <li className="download_cv">
                <Link href="#book-an-appointment">
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
