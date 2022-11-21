import { Link, NavLink } from "react-router-dom";
import React from "react";
import { Squash as Hamburger } from "hamburger-react";

function Header(props) {
  const [isOpen, setOpen] = React.useState(true);
  const [menuOpen, setOpenMenu] = React.useState(false);
  const LinkNames = ["Главная", "Меню", "О нас"];
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current?.offsetTop - 80,
      behavior: "smooth"
    });
  };

  return (
    <div className="header_background">
      <header className="container">
        <NavLink
          onClick={() => setOpenMenu(true)}
          className={({ isActive }) =>
            isActive ? "PageActive" : "PageNotActive"
          }
          to="/"
          end
        >
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
        </NavLink>
        <ul className="top_menu desktop">
          <li className="icon">
            <NavLink
              onClick={() => setOpenMenu(true)}
              className={({ isActive }) =>
                isActive ? "PageActive" : "PageNotActive"
              }
              to="/"
              end
            >
              {LinkNames[0]}
              {menuOpen && (
                <div className="icon_down">
                  <i class="fa-solid fa-chevron-down "></i>
                </div>
              )}
            </NavLink>
            {menuOpen && (
              <ul className="inner_menu" id="kek">
                <li>
                  <Link
                    className="menu_link"
                    to="/"
                    onClick={() => scrollDown(props.refProp1)}
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu_link"
                    onClick={() => scrollDown(props.refProp2)}
                    to="/"
                  >
                    Напитки
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu_link"
                    onClick={() => scrollDown(props.refProp3)}
                    to="/"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <NavLink
            onClick={() => setOpenMenu(false)}
            to="/menu"
            className={({ isActive }) =>
              isActive ? "PageActive" : "PageNotActive"
            }
          >
            <li className="icon">{LinkNames[1]}</li>
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "PageActive" : "PageNotActive"
            }
            onClick={() => setOpenMenu(false)}
          >
            <li className="icon">{LinkNames[2]}</li>
          </NavLink>
        </ul>
        <div className="mobile">
          <div className="burger" onClick={() => console.log("click")}>
            <Hamburger color="#000" toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen && (
            <ul className="top_menu ">
              <li className="icon">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "PageActive" : "PageNotActive"
                  }
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                >
                  {LinkNames[0]}

                  <div className="icon_down">
                    <i class="fa-solid fa-chevron-down "></i>
                  </div>
                </NavLink>

                <ul className="inner_menu" id="kek">
                  <li>
                    <Link
                      className="menu_link"
                      to="/"
                      onClick={() => scrollDown(props.refProp1)}
                    >
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu_link"
                      onClick={() => scrollDown(props.refProp2)}
                      to="/"
                    >
                      Напитки
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu_link"
                      onClick={() => scrollDown(props.refProp3)}
                      to="/"
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icon">
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? "PageActive" : "PageNotActive"
                  }
                >
                  {LinkNames[1]}
                </NavLink>
              </li>
              <li className="icon">
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? "PageActive" : "PageNotActive"
                  }
                >
                  {LinkNames[2]}
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
