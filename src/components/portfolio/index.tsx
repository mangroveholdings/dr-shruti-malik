import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { dataImage } from "@utils/helper";
import portfolioData from "@utils/siteSettings/portfolio.json";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  category: string;
  link: string;
  imageSrc: string;
}

interface CategoryRenderers {
  [category: string]: (item: PortfolioItem) => JSX.Element;
}

const Portfolio: React.FC = () => {
  useEffect(() => {
    dataImage();
    // portfolioHover();
  }, []);

  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    const loadIsotope = async () => {
      const IsotopeModule = (await import("isotope-layout")).default as typeof Isotope;
      if (isotope.current) {
        isotope.current.destroy();
      }
      isotope.current = new IsotopeModule(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
      });
    };

    loadIsotope();

    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value: string) => (value === filterKey ? "current" : "");

  const categoryRenderers: CategoryRenderers = {
    Youtube: (item) => (
      <Link className="popup-youtube" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.imageSrc} />
      </Link>
    ),
    Shorts: (item) => (
      <Link className="popup-vimeo" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.imageSrc} />
      </Link>
    ),
    Gallery: (item) => (
      <Link className="zoom" href={item.link}>
        <img src={item.imageSrc} alt="image" />
        <div className="main" data-img-url={item.imageSrc} />
      </Link>
    ),
    // Add more category renderers as needed
  };

  return (
    <div className="dizme_tm_section" id="portfolio">
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
          <img src={portfolioData.bg1} alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src={portfolioData.bg2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
