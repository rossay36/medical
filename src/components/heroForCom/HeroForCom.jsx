import "./HeroForCom.css";
import { Link } from "react-router-dom";

const HeroForCom = ({ headings, titles, icon }) => {
  return (
    <div className="HeroForCom">
      <div className="HeroForCom__contianer">
        <h1>{titles}</h1>
        <div className="HeroForCom__group">
          <h3>
            <Link to="/">
              <p className="HeroForCom__icon">{icon}</p>
            </Link>
          </h3>
          <h3>{headings}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroForCom;
