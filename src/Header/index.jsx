// import { BrowserRouter } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <Link className="logo" to=""></Link>
          <a href="#info" className="header__left_link">Информация</a>
          <a href="#news" className="header__left_link">Новости</a>
          <a href="#coaches" className="header__left_link">Педагоги</a>
        </div>

        <div className="header__right"> 
          <Link to="https://tadance.ru/Club/Details/209" className="header__right_talant logo"></Link>
          <Link to="https://vk.com/aalyans" className="header__right_VK logo"></Link>
        </div>
      </div>
    </header>
  );
};