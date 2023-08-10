const Header = () => {
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="#">
              <img src="img/logo/dr-shruti-malik-logo.png" alt="image" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li className="download_cv">
                <a href="#book-an-appointment">
                  <span>Book Appointment</span>
                </a>
              </li>
              {/* <li className="download_cv">
                <a href="img/cv/1.jpg" download="">
                  <span>Download CV</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
