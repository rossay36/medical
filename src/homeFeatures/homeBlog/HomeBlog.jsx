import "./HomeBlog.css";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import nurse4 from "../../assets/nurse4.jpg";
import doctorpatient from "../../assets/doctorpatient.jpg";
import nurse5 from "../../assets/nurse5.jpg";

const HomeBlog = () => {
  return (
    <div className="HomeBlog">
      <div className="HomeBlog__heading">
        <h4>OUR BLOG</h4>
      </div>
      <div className="HomeBlog__title">
        <h1>See Our Latest Blog</h1>
      </div>

      <div className="HomeBlog__col">
        <div className="HomeBlog__box">
          <div className="HomeBlog__img">
            <img src={nurse4} />
            <p>DECEMBER 5, 2021</p>
          </div>
          <div className="HomeBlog__like">
            <AiOutlineWechat className="HomeBlog__icons" />
            <p>ADMIN</p>
            <BsFillPersonFill className="HomeBlog__icons" />
            <p>11 comments</p>
          </div>
          <h2>Get The Exercise Limited Mobility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue
          </p>
          <button className="button">READ MORE +</button>
        </div>
        <div className="HomeBlog__box">
          <div className="HomeBlog__img">
            <img src={doctorpatient} />
            <p>DECEMBER 5, 2021</p>
          </div>
          <div className="HomeBlog__like">
            <AiOutlineWechat className="HomeBlog__icons" />
            <p>ADMIN</p>
            <BsFillPersonFill className="HomeBlog__icons" />
            <p>11 comments</p>
          </div>
          <h2>Get The Exercise Limited Mobility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue
          </p>
          <button className="button">READ MORE +</button>
        </div>
        <div className="HomeBlog__box">
          <div className="HomeBlog__img">
            <img src={nurse5} />
            <p>DECEMBER 5, 2021</p>
          </div>
          <div className="HomeBlog__like">
            <AiOutlineWechat className="HomeBlog__icons" />
            <p>ADMIN</p>
            <BsFillPersonFill className="HomeBlog__icons" />
            <p>11 comments</p>
          </div>
          <h2>Get The Exercise Limited Mobility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas. Maecenas consectetur augue
          </p>
          <button className="button">READ MORE +</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
