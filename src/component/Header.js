import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu/Menu";

function Header(props) {
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
        <ul className="headeRight">
          <Link className="link" to="/">
            <li className="icon" /*onClick={props.onClickCard}*/>
              Главная
              <div className="icon_down">
                <i class="fa-solid fa-chevron-down "></i>
              </div>
              <div className="menu_hidden">
                <ul className="menu">
                  <li>
                    <Link className="menu_link" to="/next">
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link className="menu_link" to="/">
                      Напитки
                    </Link>
                  </li>
                  <li>
                    <Link className="menu_link" to="/">
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </Link>

          <Link className="link" to="/menu">
            <li className="icon" /*onClick={props.onClickCard}*/>Меню</li>
          </Link>

          <Link className="link" to="/">
            <li className="icon" /*onClick={props.onClickCard}*/>FAQ</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}

export default Header;
