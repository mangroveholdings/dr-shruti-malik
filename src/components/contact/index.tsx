import data from "@utils/siteSettings/info.json";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact" id="contactMe">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span className="contactTitle">Contact Me</span>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <Link target="_blank" href={data.contact.addressLink}>
                        <div className="icon orangeBackground">
                          <i className="icon-location orangeText" />
                        </div>
                      </Link>
                      <div className="short">
                        <h3>Address</h3>
                        <span>
                          <Link target="_blank" href={data.contact.addressLink}>
                            {data.contact.address}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <Link target="_blank" href={`mailto:${data.contact.email}`}>
                        <div className="icon greenBackground">
                          <i className="icon-mail-1 greenText" />
                        </div>
                      </Link>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <Link target="_blank" href={`mailto:${data.contact.email}`}>
                            {data.contact.email}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <Link target="_blank" href={`tel:${data.contact.phn}`}>
                        <div className="icon purpleBackground">
                          <i className="icon-phone purpleText" />
                        </div>
                      </Link>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>
                          <Link target="_blank" href={`tel:${data.contact.phn}`}>
                            {data.contact.phn}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    height={375}
                    style={{ width: "100%", borderRadius: "20px" }}
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8099522945936!2d77.28569607503371!3d28.6354574839487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb561b16af7b%3A0x1301f7e5f5b7652b!2sMalik%20Radix%20Healthcare!5e0!3m2!1sen!2sin!4v1691491701047!5m2!1sen!2sin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
