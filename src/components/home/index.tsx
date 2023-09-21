import Link from "next/link";
import Image from "next/image";
import data from "@utils/siteSettings/info.json";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const social = [
  { name: "facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/shruti08malik/" },
  { name: "twitter", icon: <FaTwitter />, url: "https://twitter.com/shruti08malik/" },
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/drshrutimalik/" },
  { name: "behance", icon: <FaInstagram />, url: "https://www.instagram.com/drshrutimalik.08/" },
];

const Hero = () => {
  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div className="background" data-img-url={data.bgImg} />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>
                  <span>Dr</span>. <span>{data.name}</span>
                </h3>
              </div>
              <div className="job">
                <p>
                  <span className="greenText">{data.mainSkill}</span> At{" "}
                  <Link href={"https://radixhealthcare.org"} rel="noopener noreferrer" target="_blank">
                    <span className="purpleText">{data.address}</span>
                  </Link>
                </p>
              </div>
              <div className="text">
                <p>{data.bio}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <Link href="#about">
                    <span>About Me</span>
                  </Link>
                </div>
                <div className="social">
                  <ul>
                    {social?.map((social, i) => (
                      <li key={i}>
                        <Link href={social.url} target="_blank" rel="noreferrer">
                          <i>{social.icon}</i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img src={data.img} alt="image" />
                {data.skills?.map(
                  (skill, i) =>
                    skill.icon && (
                      <span key={i} className={`skills ${skill.name} anim_moveBottom`}>
                        <img src={skill.icon} alt={`Skill: ${skill.name}`} />
                      </span>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <Link className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
