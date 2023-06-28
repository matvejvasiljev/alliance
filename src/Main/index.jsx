import Info from "../Info";
import News from "../News";
import Coaches from "../Coaches";

export default function Main() {
  return (
    <div className="container">
      <div className="main">
        <Info></Info>
        <News></News>
        <Coaches></Coaches>
      </div>
    </div>
  )
};