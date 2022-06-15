import React, { useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import { Exchenge } from "./Exchange";
import img1 from "../img/slide_2.jpg";
import img2 from "../img/slide_4.jpg";
import img3 from "../img/slide_3.jpg";
import Comments from "./Comments";

const MainContent = () => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div className="mainContent">
      <div className="description">
        <div className="desc-left">
          <label>Gallery</label>
          <div className="gallery">
            <img alt="img3" src={img3} className="img3" />
            <div>
              <img alt="img1" src={img1} className="img1" />
              <img alt="img2" src={img2} className="img2" />
            </div>
          </div>
        </div>
        <div className="desc-right">
          <label>Description</label>
          <div className="descText">
            <p>
              Boat: Brilliance of the Seas - Royal Caribbean International Start
            </p>
            <p>location: PorteMontenegro( Montenegro ) </p>
            <p>Road of the trip:</p>
            Montenegro -- Greace -- Turkey -- Egypte -- Italia
            <p>Time: 2 week</p>
          </div>
          <Exchenge />
          <div className="buttonMain">
            <div className="btn2" onClick={() => setActiveModal(true)}>
              submit your application
            </div>
          </div>
        </div>
        <CreatePost active={activeModal} setActive={setActiveModal} />
      </div>
      <div className="formComments">
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default MainContent;
