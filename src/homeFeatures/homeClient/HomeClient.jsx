import "./HomeClient.css";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";

const HomeClient = () => {
  return (
    <div className="HomeClient">
      <div className="HomeClient__heading">
        <h4>OUR CLIENTS</h4>
      </div>
      <div className="HomeClient__title">
        <h1>Our Clients Happy Say About Us</h1>
      </div>
      <div className="HomeClient__col">
        <div className="HomeClient__box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue ut aliquet
            dignissim. Vestibulum eget eros augue.
          </p>
          <div className="HomeClient__img-bos">
            <div className="HomeClient__img">
              <img src={nurse2} />
              <div className="HomeClient__name">
                <h3>Nadim Kamal</h3>
                <h4>CANCER RESEARCH</h4>
              </div>
            </div>
            <h1>
              <RiDoubleQuotesR className="HomeClient__quote" />
            </h1>
          </div>
        </div>
        <div className="HomeClient__box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue ut aliquet
            dignissim. Vestibulum eget eros augue.
          </p>
          <div className="HomeClient__img-bos">
            <div className="HomeClient__img">
              <img src={nurse3} />
              <div className="HomeClient__name">
                <h3>Nadim Kamal</h3>
                <h4>CANCER RESEARCH</h4>
              </div>
            </div>
            <h1>
              <RiDoubleQuotesR className="HomeClient__quote" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
