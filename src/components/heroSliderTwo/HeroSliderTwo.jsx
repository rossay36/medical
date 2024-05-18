import "./HeroSliderTwo.css";
import { AiOutlinePlus } from "react-icons/ai";

const HeroSliderTwo = () => {
  return (
    <div className="heroStwo">
      <div className="heroStwo__container">
        <div className="heroStwo__h1">
          <h4>HIGH LEVEL OF CARE</h4>
        </div>
        <div className="heroStwo__h1-1">
          <h1>
            SETTING OF STANDARDS
            <br />
            IN PHYSIOTHERAPY
          </h1>
        </div>
        <div className="heroStwo__p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt diam eu est gravida imperdiet. Quisque enim neque,
          </p>
        </div>
        <div className=" heroStwo__btn">
          <button className=" button btn">
            READ MORE
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderTwo;
