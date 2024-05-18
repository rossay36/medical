import React from "react";
import nurse7 from "../../assets/nurse7.jpg";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import { ImCheckmark } from "react-icons/im";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects__first">
        <div className="Projects__first_box1">
          <img src={nurse7} />
        </div>
        <div className="Projects__first_box2">
          <h1>Project Info</h1>
          <p className="Projects__first_box2-p">
            It is a long-established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <hr />
          <div className="Projects__first_box2-table">
            <p>Date</p>
            <p>14 August 2023</p>
          </div>
          <hr />
          <div className="Projects__first_box2-table">
            <p>Client</p>
            <p>Nik Morison</p>
          </div>
          <hr />
          <div className="Projects__first_box2-table">
            <p>Category</p>
            <p>Angioplasty</p>
          </div>
          <hr />
          <div className="Projects__first_box2-table">
            <p>Project</p>
            <p>Medicate</p>
          </div>
          <hr />
          <div className="Projects__first_box2-table">
            <p>Type Of Service</p>
            <p>Orthodontics</p>
          </div>
          <hr />
        </div>
      </div>
      <div className="Projects__text">
        <h1>Project Summary</h1>
        <p>
          Project Summery are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don’t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn’t anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable.
        </p>
      </div>
      <div className="Projects__groups">
        <div className="Projects__groups_rows">
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>Aliquam tincidunt nisi vitae nulla molestie laoreet</p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              Praesent convallis odio elementum tortor tempor, sed varius odio
              iaculis.
            </p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              Nunc molestie ex at nisi vehicula, et pellentesque tortor
              elementum.
            </p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>Cras id purus faucibus, euismod metus quis, fermentum justo.</p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              Aenean et libero tincidunt, auctor urna fermentum, sagittis dolor.
            </p>
          </div>
        </div>
        <div className="Projects__groups_rows">
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              It is a long established fact that a reader will be distracted
            </p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>Many desktop publishing packages and web page editors now use</p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className="Projects__groups_rows-flex">
            <ImCheckmark className="Projects__groups-iscons" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.Lorem Ipsum as their default model text, and a search for ‘lorem
          ipsum’ will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like)
        </p>
      </div>
      <div className="Projects__image">
        <div className="Projects__image">
          <img src={nurse2} />
        </div>
        <div className="Projects__image">
          <img src={nurse3} />
        </div>
      </div>
      <div>
        <h1>How Traditional Braces Work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo
        </p>
      </div>
      <div className="Projects__counter">
        <div className="Projects__counter_flex">
          <h1>554k</h1>
          <p>SAVED HEARTS</p>
        </div>
        <div className="Projects__counter_flex">
          <h1>554k</h1>
          <p>EXPERT DOCTORS</p>
        </div>
        <div className="Projects__counter_flex">
          <h1>554k</h1>
          <p>SAVED TOOTH</p>
        </div>
        <div className="Projects__counter_flex">
          <h1>554k</h1>
          <p>HAPPY PATIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
