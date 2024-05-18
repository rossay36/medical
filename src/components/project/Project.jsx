import "./Project.css";
import { HeadTitle } from "../../components";
import nurse2 from "../../assets/nurse2.png";
import nurse7 from "../../assets/nurse7.jpg";
import nurse3 from "../../assets/nurse3.jpg";

const Project = () => {
  return (
    <div className="Project">
      <HeadTitle
        header="EXPLORE RECENT PROJECTS"
        title="Watch Latest Our Work"
      />
      <div className="Project__image">
        <div className="Project__img">
          <div className="Project__plus">
            <h1>+</h1>
          </div>
          <img src={nurse2} />
          <div className="Project__down-text">
            <p>CLINCL</p>
            <h3>HOME VISIT</h3>
          </div>
        </div>
        <div className="Project__img">
          <div className="Project__plus">
            <h1>+</h1>
          </div>
          <img src={nurse7} />
          <div className="Project__down-text">
            <p>FAMILY</p>
            <h3>INVESTIGATIONS</h3>
          </div>
        </div>
        <div className="Project__img">
          <div className="Project__plus">
            <h1>+</h1>
          </div>
          <img src={nurse3} />
          <div className="Project__down-text">
            <p>PEDIATRICS</p>
            <h3>SURGICALS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
