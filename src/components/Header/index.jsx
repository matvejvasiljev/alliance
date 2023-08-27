// import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <Link className="logo" to=""></Link>
          <a href="#/" className="header__left_link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>Информация</a>
          <a href="#/" className="header__left_link" onClick={() => window.scrollTo({top: 361, left: 0, behavior: "smooth"})}>Новости</a>
          <a href="#/" className="header__left_link" onClick={() => window.scrollTo({top: 788, left: 0, behavior: "smooth"})}>Педагоги</a>
        </div>

        <div className="header__right"> 
          <Link to="https://tadance.ru/Club/Details/209" className="header__right_talant logo"></Link>
          <Link to="https://vk.com/aalyans" className="header__right_VK logo"></Link>
        </div>
      </div>
    </header>
  );
};