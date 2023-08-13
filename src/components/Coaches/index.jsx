import images from "../../images";

export default function Coaches() {
  return (
    <>
      <div id="coaches" className="coaches">
        <h2>Педагоги</h2>
        <div className="coaches__container">
          <div className="coach">
            <img src="" alt="" className="coach__image" />
            <h3 className="coach__name">Бусарев Александр Леонидович</h3>
          </div>
          <div className="coach">
            <img src={images.larisa} alt="" />
            <h3>Капитонова Лариса Евгеньевна</h3>
          </div>
        </div>
      </div>
    </>
  );
};