import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import portfolioData from "../../public/static/portfolio.json";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const [popup, setPopup] = useState(false);

  // Define a mapping of category names to rendering components
  const categoryRenderers = {
    Youtube: (item) => (
      <a className="popup-youtube" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.detailImageSrc} />
      </a>
    ),
    Shorts: (item) => (
      <a className="popup-vimeo" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.detailImageSrc} />
      </a>
    ),
    Gallery: (item) => (
      <a className="zoom" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.detailImageSrc} />
      </a>
    ),
    // Add more category renderers as needed
  };

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            {/* <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p> */}
          </div>
          <div className="portfolio_filter">
            <ul>
              {portfolioData.categories.map((category, index) => (
                <li key={index}>
                  <a className={`c-pointer ${activeBtn(category)}`} onClick={handleFilterKeyChange(category)}>
                    {category === "*" ? "All" : category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {portfolioData.data.map((item, index) => (
                <li key={index} className={`${item.category} grid-item`}>
                  <div className="inner">
                    <div className="entry dizme_tm_portfolio_animation_wrap" data-title={item.title} data-category={item.category}>
                      {categoryRenderers[item.category] && categoryRenderers[item.category](item)}
                    </div>
                    <div className="mobile_title">
                      <h3>{item.title}</h3>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
