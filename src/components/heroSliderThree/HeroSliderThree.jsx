import "./HeroSliderThree.css";
import { AiOutlinePlus } from "react-icons/ai";

const HeroSliderThree = () => {
  return (
    <div className="heroSthree">
      <div className="heroSthree__container">
        <div className="heroSthree__h1">
          <h4>HIGH LEVEL OF CARE</h4>
        </div>
        <div className="heroSthree__h1-1">
          <h1>
            GENUINE COMMITMENT
            <br />
            TO YOUR HEALTH
          </h1>
        </div>
        <div className="heroSthree__p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt diam eu est gravida imperdiet. Quisque enim neque,
          </p>
        </div>
        <div className=" heroSthree__btn">
          <button className=" button btn">
            READ MORE
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderThree;
