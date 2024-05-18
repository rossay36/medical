import "./HomeTeams.css";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import nurse5 from "../../assets/nurse5.jpg";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import { HeadTitle } from "../../components";

const HomeTeams = () => {
  return (
    <div className="HomeTeams">
      <HeadTitle header="OUR TEAM" title="Meet Our Heart Specialists" />

      <div className="HomeTeams__container">
        <div className="HomeTeams__box">
          <div className="HomeTeams__img">
            <div className="HomeTeams__icons">
              <FiFacebook className="HomeTeams__icon" />
              <FiTwitter className="HomeTeams__icon" />
              <GrGooglePlus className="HomeTeams__icon" />
            </div>
            <img src={nurse3} />
            <div className="HomeTeams__name">
              <h4>Naidan Smith</h4>
              <p>PEDAITRI CLINIC</p>
            </div>
          </div>
        </div>
        <div className="HomeTeams__box">
          <div className="HomeTeams__img">
            <div className="HomeTeams__icons">
              <FiFacebook className="HomeTeams__icon" />
              <FiTwitter className="HomeTeams__icon" />
              <GrGooglePlus className="HomeTeams__icon" />
            </div>
            <img src={nurse2} />
            <div className="HomeTeams__name">
              <h4>Naidan Smith</h4>
              <p>PEDAITRI CLINIC</p>
            </div>
          </div>
        </div>
        <div className="HomeTeams__box">
          <div className="HomeTeams__img">
            <div className="HomeTeams__icons">
              <FiFacebook className="HomeTeams__icon" />
              <FiTwitter className="HomeTeams__icon" />
              <GrGooglePlus className="HomeTeams__icon" />
            </div>
            <img src={nurse5} />
            <div className="HomeTeams__name">
              <h4>Naidan Smith</h4>
              <p>PEDAITRI CLINIC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeams;
