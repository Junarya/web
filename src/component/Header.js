import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import React from "react";

function Header(props) {
  /*  this.state = {
    selected: null
  };


onClickItem (item) {
  this.setState({
    selected: item
  })
}*/
  const LinkNames = ["Главная", "Меню", "О нас"];
  const [activePage, setActivePage] = React.useState(0);
  const onClickHeader = (index) => {
    setActivePage(index);
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
        <ul className="headeRight">
          <Link className="link" to="/">
            <li className="icon" /*onClick={props.onClickCard}*/>
              {
                <p
                  onClick={() => onClickHeader(0)}
                  className={activePage == 0 ? "PageActive" : "PageNotActive"}
                >
                  {LinkNames[0]}
                </p>
              }
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
            <li className="icon" /*onClick={props.onClickCard}*/>
              <p
                onClick={() => onClickHeader(1)}
                className={activePage == 1 ? "PageActive" : "PageNotActive"}
              >
                {LinkNames[1]}
              </p>
            </li>
          </Link>

          <Link className="link" to="/">
            <li className="icon" /*onClick={props.onClickCard}*/>
              <p
                onClick={() => onClickHeader(2)}
                className={activePage == 2 ? "PageActive" : "PageNotActive"}
              >
                {LinkNames[2]}
              </p>
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
}

export default Header;
