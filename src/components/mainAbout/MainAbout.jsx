import "./MainAbout.css";
import nurse7 from "../../assets/nurse7.jpg";
import signature from "../../assets/signature.png";
import { HeadTitle } from "../../components";
import { FcCheckmark } from "react-icons/fc";

const MainAbout = () => {
  return (
    <div className="MainAbout">
      <div className="MainAbout__img">
        <img
          src={nurse7}
          alt="wait while the image is load... {check your network connetion}"
        />
      </div>

      <div className="MainAbout__text">
        <HeadTitle
          className="headertitle"
          header="WHAT ABOUT US"
          title="The Heart And Science Of Medic Test"
        />

        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
          or randomised words which don't look..
        </p>
        <div className="MainAbout__text-icons">
          <div className="MainAbout__groups">
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Intervention Success</p>
            </div>
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Quality of Care Services</p>
            </div>
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Client Satisfaction</p>
            </div>
          </div>
          <div className="MainAbout__groups">
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Happy with Staf</p>
            </div>
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Infection Prevention</p>
            </div>
            <div className="MainAbout__icons-headings">
              <FcCheckmark />
              <p>Patient Experience</p>
            </div>
          </div>
        </div>
        <div className="MainAbout__signature">
          <div className="MainAbout__signature-text">
            <h3>+1 (212) 255-5511</h3>
            <p>Do you have any question?</p>
          </div>
          <div className="MainAbout__signature-img">
            <img src={signature} />
          </div>
        </div>
        <button className="button">READ MORE +</button>
      </div>
    </div>
  );
};

export default MainAbout;
