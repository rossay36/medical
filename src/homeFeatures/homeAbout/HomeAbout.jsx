import "./HomeAbout.css";
import docequipt from "../../assets/docequipt.jpg";
import { TbCross } from "react-icons/tb";

const HomeAbout = () => {
  return (
    <div className="HomeAbout">
      <div className="HomeAbout__colunms1">
        <div className="HomeAbout__heading">
          <h3>ABOUT US</h3>
        </div>
        <div className="HomeAbout__title">
          <h1>Joining Hands With Techno Easement </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue ut aliquet
            dignissim.
          </p>
        </div>
        <div className="HomeAbout__images">
          <img src={docequipt} />
          <p>
            rem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum.
          </p>
        </div>
        <button className="button">
          READ MORE <TbCross />
        </button>
      </div>

      <div className="HomeAbout__colunms2">
        <div className="HomeAbout__col-box">
          <h1>450+</h1>
        </div>
        <div className="HomeAbout__col-box">
          <h1>100+</h1>
        </div>
        <div className="HomeAbout__col-box">
          <h1>59+</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
