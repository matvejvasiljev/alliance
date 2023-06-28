// import images from "../images"; 
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function News() {
  const [sliderPos, setSliderPos] = useState(0)
  function handleSlider(dir) {
    if (dir === "left") {
      setSliderPos(sliderPos + 700)
    }
    else {
      setSliderPos(sliderPos - 700)
    }
  }

  return (
    <>
      <div id="news" className="news">
        <h2>Новости</h2>
        <div className="news__container">
          <div className="news__arrow"><IoChevronBack onClick={() => handleSlider("left")} className="news__arrow_left"></IoChevronBack></div>

          <div className="news__slider" style={{ transform: "translateX(" + sliderPos + "px)" }}>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src="" alt="" />
                <h4>Lorem ipsum 0</h4>
              </div>
              <div className="news__right">
                <img src="" alt="" />
                <h4>Lorem ipsum 1</h4>
              </div>
            </div>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src="" alt="" />
                <h4>Lorem ipsum 2</h4>
              </div>
              <div className="news__right">
                <img src="" alt="" />
                <h4>Lorem ipsum 3</h4>
              </div>
            </div>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src="" alt="" />
                <h4>Lorem ipsum 4</h4>
              </div>
              <div className="news__right">
                <img src="" alt="" />
                <h4>Lorem ipsum 5</h4>
              </div>
            </div>

          </div>
          <div className="news__arrow"><IoChevronForward onClick={() => handleSlider("right")} className="news__arrow_right"></IoChevronForward></div>
        </div>
      </div>
    </>
  );
};