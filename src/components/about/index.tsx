import React, { FC } from "react";
import Counter from "../counter";
import Link from "next/link";
import Image from "next/image";
import data from "@utils/siteSettings/about.json"

const About: FC = () => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <Image src={data.img} alt="Image" width={500} height={500} />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data.dailyAppointments} />+
                    </h3>
                    <span className="name">
                      Daily
                      <br />
                      appointments
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data.customerSatisfaction} />%
                    </h3>
                    <span className="name">
                      Customer
                      <br />
                      satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a ${data.skill}`}</span>
                <h3>{data.title}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>{data.bio}</p>
              </div>
              <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                <Link className="anchor" href="#book-an-appointment">
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src={data.bg1} alt="Image" width={100} height={100} />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image src={data.bg2} alt="Image" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default About;
