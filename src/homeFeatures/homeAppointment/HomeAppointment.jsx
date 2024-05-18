import "./HomeAppointment.css";
import nurse2 from "../../assets/nurse2.png";

const HomeAppointment = () => {
  return (
    <div className="HomeAppointment">
      <div className="HomeAppointment__img">
        <img src={nurse2} />
      </div>

      <div className="HomeAppointment__forms">
        <div className="HomeAppointment__heading">
          <h3>APOINTMENT</h3>
        </div>
        <div className="HomeAppointment__title">
          <h1>Apply For Free Treatments</h1>
        </div>
        <form className="HomeAppointment__form">
          <div className="HomeAppointment__first-input">
            <input type="name" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="HomeAppointment__second-input">
            <input type="text" placeholder="Your Doctor Name" />
            <input type="text" placeholder="Your Disease Name" />
          </div>
          <div className="HomeAppointment__button">
            <input
              className="HomeAppointment-input"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeAppointment;
