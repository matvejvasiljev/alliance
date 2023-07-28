import images from "../images";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="social">
                        <div className="social__left">
                            <Link className="logo" to=""></Link>
                            <Link to="https://tadance.ru/Club/Details/209" className="talant logo"></Link>
                            <Link to="https://vk.com/aalyans" className="VK logo"></Link>
                        </div>

                        <div className="social__right">
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>+7 (000) 000 00-00</p>
                        </div>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=39.997205%2C57.709966&mode=poi&poi%5Bpoint%5D=39.893809%2C57.626562&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1NzI0MRIg0KDQvtGB0YHQuNGPLCDQr9GA0L7RgdC70LDQstC70YwiCg1Ekx9CFZmBZkI%2C&z=11.2" width="700" height="300" frameBorder="0" allowFullScreen={true} style={{ position: "relative" }}></iframe>
                </div>
            </div>
        </>
    );
};