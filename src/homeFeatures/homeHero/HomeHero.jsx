import { useRef } from "react";
import "./HomeHero.css";
import { Carousel } from "antd";
import {
  HeroSliderOne,
  HeroSliderThree,
  HeroSliderTwo,
} from "../../components";

const HomeHero = () => {
  const ref = useRef(false);

  return (
    <div className="homehero">
      <div className="homehero__container">
        <Carousel autoplay={true} fade={true} pauseOnHover ref={ref}>
          <HeroSliderOne />
          <HeroSliderTwo />
          <HeroSliderThree />
        </Carousel>
        <div className="homehero__button">
          <button
            className="homehero__but"
            onClick={() => {
              ref.current.prev();
            }}
          >
            Prev
          </button>
          <button
            className="homehero__but"
            onClick={() => {
              ref.current.goTo(0);
            }}
          >
            Reset
          </button>
          <button
            className="homehero__but"
            onClick={() => {
              ref.current.next();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
