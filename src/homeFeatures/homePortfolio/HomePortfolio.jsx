import "./HomePortfolio.css";
import nurse5 from "../../assets/nurse5.jpg";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import nurse4 from "../../assets/nurse4.jpg";

const HomePortfolio = () => {
  return (
    <div className="HomePortfolio">
      <div className="HomePortfolio__heading">
        <h4>OUR PORTFOLIO</h4>
      </div>
      <div className="HomePortfolio__title">
        <h1>All The Great Work That We have Done</h1>
      </div>

      <div className="HomePortfolio__col">
        <div className="HomePortfolio__img">
          <img src={nurse2} />
        </div>
        <div className="HomePortfolio__img">
          <img src={nurse5} />
        </div>
        <div className="HomePortfolio__img">
          <img src={nurse3} />
        </div>
        <div className="HomePortfolio__img">
          <img src={nurse4} />
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
