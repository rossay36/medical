import "./HomeSteps.css";
import nurse5 from "../../assets/nurse5.jpg";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import nurse4 from "../../assets/nurse4.jpg";

const HomeSteps = () => {
  return (
    <div className="HomeSteps">
      <div className="HomeSteps__heading">
        <h4>Our Steps</h4>
      </div>
      <div className="HomeSteps__title">
        <h1>Our Working Best Process</h1>
      </div>

      <div className="HomeSteps__col">
        <div className="HomeSteps__box">
          <div className="HomeSteps__img">
            <img src={nurse5} />
            <span>01</span>
          </div>

          <h3>Emergency Care</h3>
          <p>There are many variations of passages Lorem Ipsum available</p>
        </div>
        <div className="HomeSteps__box">
          <div className="HomeSteps__img">
            <img src={nurse4} />
            <span>02</span>
          </div>

          <h3>Operation Theatre</h3>
          <p>There are many variations of passages Lorem Ipsum available</p>
        </div>
        <div className="HomeSteps__box">
          <div className="HomeSteps__img">
            <img src={nurse2} />
            <span>03</span>
          </div>

          <h3>Blood Test</h3>
          <p>There are many variations of passages Lorem Ipsum available</p>
        </div>
        <div className="HomeSteps__box">
          <div className="HomeSteps__img">
            <img src={nurse3} />
            <span>04</span>
          </div>

          <h3>Outdoor Checkup</h3>
          <p>There are many variations of passages Lorem Ipsum available</p>
        </div>
      </div>
      <div className="HomeSteps__button">
        <button className="button">APOINTMENT+</button>
      </div>
    </div>
  );
};

export default HomeSteps;
