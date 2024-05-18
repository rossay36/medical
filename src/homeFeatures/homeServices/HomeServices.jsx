import "./HomeServices.css";
import equipt from "../../assets/equipt.jpg";
import drawing from "../../assets/drawing.jpg";
import drawing2 from "../../assets/drawing2.jpg";
import drawing1 from "../../assets/drawing1.png";
import drawing3 from "../../assets/drawing3.png";

const HomeServices = () => {
  return (
    <div className="HomeServices">
      <div className="HomeServices__title">
        <div className="HomeServices__title-h4">
          <h4>Our Services</h4>
        </div>
        <h1>We Provides Various Directions</h1>
      </div>

      <div className="HomeServices__col">
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing} />
          </div>
          <h1>Angioplasty</h1>
          <p>There are many various of</p>
          <p>pas of Lorem Ipsum </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing3} />
          </div>
          <h1>Cardiology</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing} />
          </div>
          <h1>Eye Care</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing1} />
          </div>
          <h1>Dental</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
      </div>
      <div className="HomeServices__col">
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={equipt} />
          </div>
          <h1>Endocrinology</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing2} />
          </div>
          <h1>Neurology</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={drawing3} />
          </div>
          <h1>Orthopaedics</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>
          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>

        <div className="HomeServices__boxs">
          <div className="HomeServices__boxs-img">
            <img src={equipt} />
          </div>
          <h1>RMI</h1>
          <p>There are many various of</p>
          <p>Maecenas consectetur aug </p>

          <div className="HomeServices__boxs-button">
            <button className="button">READ MORE +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
