import "./HomeKnowAbout.css";
import nurse2 from "../../assets/nurse2.png";
import { ImCheckmark } from "react-icons/im";
import { TbCross } from "react-icons/tb";

const HomeKnowAbout = () => {
  return (
    <div className="HomeKnowAbout">
      <div className="HomeKnowAbout__box">
        <img src={nurse2} className="HomeKnowAbout__img" />
      </div>

      <div className="HomeKnowAbout__boxs">
        <div className="HomeKnowAbout__test">
          <div className="HomeKnowAbout__aboutUs">
            <h3 id="About">What About Us</h3>
          </div>
          <h1>The Heart And science Of Medic Test</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue ut aliquet
          </p>
        </div>
        <div className="HomeKnowAbout__down-text">
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>
          <div className="HomeKnowAbout__good">
            <ImCheckmark className="HomeKnowAbout__good-icon" />
            <p>tincidunt euismod ac in ipsum</p>
          </div>

          <button className="button HomeKnowAbout__btn ">
            READ MORE
            <TbCross />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeKnowAbout;
