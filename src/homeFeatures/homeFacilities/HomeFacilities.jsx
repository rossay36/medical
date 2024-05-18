import "./HomeFacilities.css";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import nurse4 from "../../assets/nurse4.jpg";
import drawing3 from "../../assets/drawing3.png";

const HomeFacilities = () => {
  return (
    <div className="HomeFacilities">
      <div className="HomeFacilities__title">
        <h3>FACILITIES WE HAVE</h3>
        <h1>What Facilities We Provide</h1>
      </div>
      <div className="HomeFacilities__boxs">
        <div className="HomeFacilities__box">
          <img src={nurse2} />
          <div className="HomeFacilities__text">
            <div className="HomeFacilities__test">
              <h3>MEDICAL SURGERY</h3>
              <h2>EYE CARE SERVICES</h2>
            </div>
            <img className="HomeFacilities__img" src={drawing3} />
          </div>
        </div>
        <div className="HomeFacilities__box">
          <img src={nurse3} />
          <div className="HomeFacilities__text">
            <div className="HomeFacilities__test">
              <h3>MEDICAL THERAPY</h3>
              <h2>CARDIOLOGY SERVICES</h2>
            </div>
            <img className="HomeFacilities__img" src={drawing3} />
          </div>
        </div>
        <div className="HomeFacilities__box">
          <img src={nurse4} />
          <div className="HomeFacilities__text">
            <div className="HomeFacilities__test">
              <h3>MEDICAL PEDIATRICE</h3>
              <h2>DENTAL SERVICES</h2>
            </div>
            <img className="HomeFacilities__img" src={drawing3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFacilities;
