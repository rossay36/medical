import "./HeroSliderOne.css";
import { AiOutlinePlus } from "react-icons/ai";

const HeroSliderOne = () => {
  return (
    <div className="heroSone">
      <div className="heroSone__container">
        <div className="heroSone__h1">
          <h4>GREATE EXPERIENCE IN BUILDING</h4>
        </div>
        <div className="heroSone__h1-1">
          <h1>
            ORTHOPEDIC TREATEMENT <br />
            ACCUTE PAIN
          </h1>
        </div>
        <div className="heroSone__p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt diam eu est gravida imperdiet. Quisque enim neque,
          </p>
        </div>
        <div className=" heroSone__btn">
          <button className=" button btn">
            READ MORE
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderOne;
