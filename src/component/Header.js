import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import React from "react";
import { useRef } from "react";
//import {kek as Link } from "react-scroll";

function Header(props) {
  const aboutSection = useRef(null);
  const LinkNames = ["Главная", "Меню", "О нас"];
  const [activePage, setActivePage] = React.useState(0);
  const onClickHeader = (index) => {
    setActivePage(index);
  };
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="header_background">
      <header className="container">
        <Link className="link" to="/">
          {" "}
          {/*   /  - переход на главную страницу*/}
          <div className="headerLeft">
            <img
              className="imgName"
              src={require("./img/logo.png")}
              alt="logo.jpg"
            />
            <img
              className="logoName"
              src={require("./img/name.png")}
              alt="name.jpg"
            />
          </div>
        </Link>
        <ul className="top_menu">
          <li className="icon" /*onClick={props.onClickCard}*/>
            <Link className="link" to="/">
              {
                <span
                  onClick={() => onClickHeader(0)}
                  className={activePage == 0 ? "PageActive" : "PageNotActive"}
                >
                  {LinkNames[0]}
                </span>
              }
              <div className="icon_down">
                <i class="fa-solid fa-chevron-down "></i>
              </div>
            </Link>

            <ul className="inner_menu">
              <li>
                <Link
                  className="menu_link"
                  onClick={() => scrollDown(props.section1)}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  className="menu_link"
                  onClick={() => scrollDown(props.section2)}
                >
                  Напитки
                </Link>
              </li>
              <li>
                <Link
                  className="menu_link"
                  onClick={() => scrollDown(props.section3)}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </li>

          <Link className="link" to="/menu">
            <li className="icon" /*onClick={props.onClickCard}*/>
              <span
                onClick={() => onClickHeader(1)}
                className={activePage == 1 ? "PageActive" : "PageNotActive"}
              >
                {LinkNames[1]}
              </span>
            </li>
          </Link>

          <Link className="link" to="/">
            <li className="icon" /*onClick={props.onClickCard}*/>
              <span
                onClick={() => onClickHeader(2)}
                className={activePage == 2 ? "PageActive" : "PageNotActive"}
              >
                {LinkNames[2]}
              </span>
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
}

export default Header;
