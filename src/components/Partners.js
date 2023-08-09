import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Partners = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/partners.json"));
  }, []);
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>News</span>
          </div>
          <div className="partners_inner">
            <ul>
              {data &&
                data.map((img, i) => (
                  <li className="wow fadeIn" data-wow-duration="1s" key={i} data-wow-delay={`0.${i + 1 * 2}s`}>
                    <div className="list_inner">
                      <img src={img.logo.light} alt="image" />
                      <a className="dizme_tm_full_link" href={img.link} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
