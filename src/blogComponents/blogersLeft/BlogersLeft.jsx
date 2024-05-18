import "./BlogersLeft.css";
import nurse7 from "../../assets/nurse7.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import youtube from "../../assets/youtube.jpg";
import avatar from "../../assets/avatar.png";

const BlogersLeft = () => {
  return (
    <div className="BlogersLeft">
      <div className="BlogersLeft__img">
        <img src={nurse7} />
        <div className="BlogersLeft__img-btn">
          <button className="button">DECEMBER 17,2021</button>
        </div>
      </div>
      <div className="BlogersLeft__like">
        <BsFillPersonFill className="BlogersLeft__like-icon" />
        <p>ADMIN</p>
        <FaComments className="BlogersLeft__like-icon" />
        <p>COMMENTS</p>
      </div>
      <hr />
      <div className="BlogersLeft__container">
        <div className="BlogersLeft__text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since.
          </p>
        </div>
        <div className="BlogersLeft__text">
          <h2>Results Are Easy To Obtain</h2>
          <p>
            Medicate is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="BlogersLeft__text-reader">
          <p>
            Reader distracted by the readable content of a page when looking at
            its layout. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div className="BlogersLeft__text">
          <h2> Expert Recommendations </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
        <div className="BlogersLeft__col">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>– Michal Smart</p>
        </div>
        <div className="BlogersLeft__image">
          <img src={youtube} />
        </div>
        <div className="BlogersLeft__comments">
          <h1>11 COMMENTS</h1>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <div>
              <p>Ut enim ad minim veniam, nisi ut aliquip</p>
            </div>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>Ut enim ad minim veniam,</p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>Ut enim ad minim veniam, quis nostrud</p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>Ut enim ad minim veniam, quis consequat</p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>xercitation ullamco laboris nisi ut aliquip ex ea consequat</p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>nisi ut aliquip ex ea commodo consequat</p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud ullamco laboris consequat
            </p>
          </div>
        </div>
        <div className="BlogersLeft__avatar">
          <div className="BlogersLeft__avatar-img">
            <img src={avatar} />
          </div>
          <div className="BlogersLeft__avatar-col">
            <div className="BlogersLeft__avatar-admin">
              <p>ADMIN</p>
              <p>REPLY</p>
            </div>
            <p>
              Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex
              ea commodo
            </p>
          </div>
        </div>
        <form className="BloggersLeft__form-title">
          <div className="BloggersLeft__form-title-text">
            <h2>Write A Reply Or Comment</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="BloggersLeft__form-title-input">
            <div className="BloggersLeft__form_fisrt-inp">
              <input
                type="name"
                name="name"
                id="name "
                placeholder="Entter Your Name*"
              />
              <input
                type="email"
                name="email"
                id="email "
                placeholder="Enter Your email*"
              />
            </div>

            <div className="BloggersLeft__form__url">
              <input
                type="url"
                name="website"
                id="website "
                placeholder=" Enter Your Url*"
              />
            </div>
          </div>
          <div className="BloggersLeft__form-title-textarea">
            <textarea typeof="text" placeholder="Enter Your Comments*" />
          </div>
          <div className="BloggersLeft__form-button">
            <button className="button">Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogersLeft;
