import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Service = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/service.json"));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
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
            <h3>What I Do for Clients</h3>
            <p>We offer a number of general and specialized dentistry options to suit all ages and needs:</p>
          </div>
          <div className="service_list">
            <ul>
              {data.map(
                (data, i) =>
                  data && (
                    <li className={`wow ${(i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`} data-wow-duration="1s" key={i}>
                      <div className="list_inner tilt-effect">
                        <span className="icon">
                          <img className="back" src={data.icon.iconBg} alt="image" />
                        </span>
                        <div className="title">
                          <h3>{data.title}</h3>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;
