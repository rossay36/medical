import "./BlogersRight.css";
import { FaSearch } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import nurse10 from "../../assets/nurse10.png";

const BlogersRight = () => {
  return (
    <div className="BlogersRight">
      <form className="BlogersRight__form">
        <input type="text" />
        <div className="BlogersRight__form-icons">
          <FaSearch className="BlogersRight__form-icon" />
        </div>
      </form>
      <div className="BlogersRight__categories">
        <h1>Categories</h1>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Annoucements</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Asistance</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Discounts</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Healthcare</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Treatments</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Uncategorize</p>
        </div>
      </div>
      <div className="BlogersRight__categories">
        <h1>Meta</h1>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Login</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Enteries Feed</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Comments Feed</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Wordpress.org</p>
        </div>
      </div>
      <div className="BlogersRight__tag">
        <h1>Tag</h1>
        <div className="BlogersRight__tag_box">
          <p>Adventures</p>
          <p>Cardiac</p>
          <p>Care</p>
        </div>
        <div className="BlogersRight__tag_box">
          <p>Doctors</p>
          <p>Health</p>
          <p>Hospital</p>
        </div>
      </div>
      <div className="BlogersRight__categories">
        <h1>Services</h1>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Cardiology Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Angioplasty Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Dental Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Endocrinologr Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Eye Care Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Neurology Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>Orthopaedics Services</p>
        </div>
        <div className="BlogersRight__categories-rows">
          <TbMathGreater />
          <p>RMI Services</p>
        </div>
      </div>
      <div className="BlogersRight__bottom">
        <h2>Ready To Get Expert Our Services</h2>
        <button className="button">CONTACT US +</button>
        <img src={nurse10} />
      </div>
    </div>
  );
};

export default BlogersRight;
