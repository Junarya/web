import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";
import Panda from "./panda.svg";
import Vector from "./Vector.svg";
import Vector1 from "./Vector1.svg";

function Footer() {
  return (
    <div className="footer_container">
      <img className="left_leaf" src={Vector}></img>
      <div className="box">
        <div className="leftContainer">
          <img className="panda" src={Panda} alt="1" />
          <div>©Wahaha., 2022 г.</div>
        </div>
        <div className="midContainer">
          <Link className="footer__main" to="/">
            ГЛАВНАЯ
          </Link>
          <Link className="footer__menu" to="/menu">
            МЕНЮ
          </Link>
          <Link className="footer__faq" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="rightContainer">
          <a href="https://t.me/s/Wahaha_spb" className="tg">
            <div className="first bg-Vector5"></div>
            <div className="second bg-Vector7"></div>
          </a>

          <a
            href="https://vk.com/wahaha.tea.coffee?ysclid=l9x24mihdi352418586"
            className="vk"
          >
            <div className="first bg-Vector6"></div>
            <div className="second bg-Vector8"></div>
          </a>
        </div>
      </div>
      <img className="right_leaf" src={Vector1}></img>
    </div>
  );
}
export default Footer;
