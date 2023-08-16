import { InlineWidget } from "react-calendly";
import data from "@utils/siteSettings/book-appointment.json";

const BookAppointment = () => {
  return (
    <div className="dizme_tm_section" id="book-an-appointment">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Book Appointment</span>
            {/* <h3>I Want To Hear From You</h3> */}
            {/* <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p> */}
          </div>
          <div className="contact_inner">
            <div className="calendly">
              <InlineWidget
                styles={{
                  width: "100%",
                  WebkitOverflowScrolling: "auto",
                }}
                url={data.calendlyLink}
              />
            </div>

            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src={data.bgImg2} alt="image" />
            </div>
          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8099522945936!2d77.28569607503371!3d28.6354574839487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb561b16af7b%3A0x1301f7e5f5b7652b!2sMalik%20Radix%20Healthcare!5e0!3m2!1sen!2sin!4v1691491701047!5m2!1sen!2sin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src={data.bgImg1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
