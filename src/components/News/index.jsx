import images from "../../images";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { useResize } from "../../utils/resize";

export default function News() {
  const { typeScreen } = useResize();
  const [mobile, setMobile] = useState(false);
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://api.alliance-dance-club.ru/news')
      .then(response => response.json())
      .then(commits => {
        setNews(commits.concat(commits));
        console.log(commits);
      })
  }, [])

  useEffect(() => {
    if (typeScreen === "mobile") {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [typeScreen]);


  const [sliderPos, setSliderPos] = useState(0)
  const [sliderTransition, setSliderTransition] = useState(0)
  const [sliderBlocked, setSliderBlocked] = useState(false)

  const [sliderCount, setSliderCount] = useState(0)

  const [popupMode, setPopupMode] = useState(false);
  const [popupId, setPopupId] = useState(0);
  const titles = ["Lorem ipsum 0", "Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3", "Lorem ipsum 4", "Lorem ipsum 5",];

  function handleSlider(dir) {
    if (sliderBlocked === false) {
      let sliderCounter = sliderCount;
      setSliderTransition("0.5s");
      setSliderBlocked(true);
      if (dir === "left") {
        setSliderPos(mobile ? (sliderPos + 320) : (sliderPos + 640));
      }
      else {
        setSliderPos(mobile ? (sliderPos - 320) : (sliderPos - 640));
      }
      setTimeout(() => {
        let rearrangedNews = news;
        if (dir === "left") {
          if (mobile) {
            rearrangedNews.splice(0, 0, rearrangedNews[rearrangedNews.length - 1]);
            rearrangedNews.splice(rearrangedNews.length - 2, 1);
          }
          else {
            rearrangedNews.splice(0, 0, rearrangedNews[rearrangedNews.length - 2], rearrangedNews[rearrangedNews.length - 1]);
            rearrangedNews.splice(rearrangedNews.length - 2, 2);
          }
          setNews(rearrangedNews);
        }
        else {
          if (mobile) {
            rearrangedNews.push(rearrangedNews[0]);
            rearrangedNews.splice(0, 1);
          }
          else {
            rearrangedNews.push(rearrangedNews[0], rearrangedNews[1]);
            rearrangedNews.splice(0, 2);
          }
          setNews(rearrangedNews);
        }
        setSliderTransition("0s");
        setSliderPos(0);
        setSliderBlocked(false);
        setSliderCount(sliderCounter);
      }, 500);
    }
  }

  return (
    <>
      <div id="news" className="news">
        <h2>Новости</h2>
        <div className="news__container">
          <IoChevronBack onClick={() => handleSlider("left")} className="news__arrow-left"></IoChevronBack>

          {mobile ?

            <ul className="news__slider" style={{ transform: "translateX(" + sliderPos + "px)", transition: sliderTransition }}>
              {news.map((item, index) => (
                <li className="news__item" key={index} onClick={() => setPopupMode(true)}>
                  <img src={`https://api.alliance-dance-club.ru/news/${item._id}/photo`} alt="" />
                  <h4>{item.title}</h4>
                </li>
              ))}
            </ul>

            :

            <ul className="news__slider" style={{ transform: "translateX(" + sliderPos + "px)", transition: sliderTransition }}>
              {news.map((item, index) => (
                <li className="news__item" key={index} onClick={() => {
                  setPopupMode(true);
                  setPopupId(index);
                }}>
                  <img src={`https://api.alliance-dance-club.ru/news/${item._id}/photo`} alt="" />
                  <h4>{item.title}</h4>
                </li>
              ))}
            </ul>
          }

          <IoChevronForward onClick={() => handleSlider("right")} className="news__arrow-right"></IoChevronForward>
        </div>
      </div >

      {popupMode
        &&
        <div className="newsPopup">
          <div className="newsPopup__BG" onClick={() => setPopupMode(false)}></div>
          <div className="newsPopup__menu">
            <div className="newsPopup__menu_container">
              <h2>{news[popupId].title}</h2>
              <p>{news[popupId].message}</p>
              <p>{news[popupId].publishedAt}</p>
              <img src={`https://api.alliance-dance-club.ru/news/${news[popupId]._id}/photo`} alt="" />
              <IoClose className="newsPopup__close" onClick={() => setPopupMode(false)}></IoClose>
            </div>
          </div>
        </div>
      }
    </>
  );
};