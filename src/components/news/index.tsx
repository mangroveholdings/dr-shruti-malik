import Link from "next/link";
import data from "@utils/siteSettings/news.json";

const News = () => {
  return (
    <div className="dizme_tm_section" id="news">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>News</span>
          </div>
          <div className="partners_inner">
            <ul>
              {data.map((img, i) => (
                <li className="wow fadeIn" data-wow-duration="1s" key={i} data-wow-delay={`0.${i + 1 * 2}s`}>
                  <div className="list_inner">
                    <img src={img.logo} alt="image" />
                    <Link className="dizme_tm_full_link" href={img.link} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="https://cdn.radixhealthcare.org/v1/assets/dr-shruti-web/brushes/news/1.webp" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default News;
