import React, { useEffect } from "react";
import data from "@utils/siteSettings/service.json";

const Service: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      const VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  return (
    <div className="dizme_tm_section" id="service">
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Patients</h3>
            <p>We offer a number of general and specialized dentistry options to suit all ages and needs:</p>
          </div>
          <div className="service_list">
            <ul>
              {data.map(
                (dataItem, i) =>
                  dataItem && (
                    <li className={`wow ${(i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`} data-wow-duration="1s" key={i}>
                      <div className="list_inner1 tilt-effect">
                        <span className="icon1">
                          <img className="back1" src={dataItem.icon} alt="image" />
                        </span>
                        <div className="title1">
                          <h3>{dataItem.title}</h3>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="https://cdn.radixhealthcare.org/v1/assets/dr-shruti-web/brushes/service/2.webp" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="https://cdn.radixhealthcare.org/v1/assets/dr-shruti-web/brushes/service/1.webp" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
