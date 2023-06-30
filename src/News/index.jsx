import images from "../images";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function News() {
  const [sliderPos, setSliderPos] = useState(0)
  const [sliderTransition, setSliderTransition] = useState(0)
  const [sliderBlocked, setSliderBlocked] = useState(false)

  const [sliderCount, setSliderCount] = useState(0)

  const titles = ["Lorem ipsum 0", "Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3", "Lorem ipsum 4", "Lorem ipsum 5",]

  function handleSlider(dir) {
    if (sliderBlocked === false) {
      let sliderCounter = sliderCount
      setSliderTransition("0.5s")
      setSliderBlocked(true)
      if (dir === "left") {
        setSliderPos(sliderPos + 700)
      }
      else {
        setSliderPos(sliderPos - 700)
      }
      setTimeout(() => {
        if (dir === "left") {
          sliderCounter = sliderCounter - 2
          if (sliderCounter < 0) {
            sliderCounter += 6
          }
        }
        else {
          sliderCounter = sliderCounter + 2
          if (sliderCounter > 5) {
            sliderCounter -= 6
          }
        }
        setSliderTransition("0s")
        setSliderPos(0)
        setSliderBlocked(false)
        console.log(sliderCounter);
        setSliderCount(sliderCounter)
      }, 500);
    }
  }

  return (
    <>
      <div id="news" className="news">
        <h2>Новости</h2>
        <div className="news__container">
          <IoChevronBack onClick={() => handleSlider("left")} className="news__arrow-left"></IoChevronBack>

          <div className="news__slider" style={{ transform: "translateX(" + sliderPos + "px)", transition: sliderTransition }}>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 0) % titles.length]}</h4>
              </div>
              <div className="news__right">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 1) % titles.length]}</h4>
              </div>
            </div>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 2) % titles.length]}</h4>
              </div>
              <div className="news__right">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 3) % titles.length]}</h4>
              </div>
            </div>

            <div className="news__slider_slide">
              <div className="news__left">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 4) % titles.length]}</h4>
              </div>
              <div className="news__right">
                <img src={images.newsImage} alt="" />
                <h4>{titles[(sliderCount + 5) % titles.length]}</h4>
              </div>
            </div>

          </div>
          <IoChevronForward onClick={() => handleSlider("right")} className="news__arrow-right"></IoChevronForward>
        </div>
      </div>
    </>
  );
};