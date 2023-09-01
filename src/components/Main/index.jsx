import Info from "../Info";
import News from "../News";
import Coaches from "../Coaches";
import Footer from "../Footer";


export default function Main() {
  return (
    <div className="container">
      <div className="main">
        <Info />
        <News />
        <Coaches />
        <Footer />
      </div>
    </div>
  )
};