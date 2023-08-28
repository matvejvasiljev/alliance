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
                            <p>Ленинградский проспект, 45А</p>
                            <p>+7 (000) 000 00-00</p>
                        </div>
                    </div>
                    <iframe
                        title="yandex-map-club-dance"
                        src="https://yandex.ru/map-widget/v1/?ll=39.796939%2C57.678110&mode=whatshere&whatshere%5Bpoint%5D=39.795836%2C57.678437&whatshere%5Bzoom%5D=17&z=17"
                        width="700" height="300" frameBorder="0" allowFullScreen={true} style={{ position: "relative" }}
                    />
                </div>
            </div>
        </>
    );
};
