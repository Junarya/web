import React from "react"
import "./Footer.scss"
import Panda from "./panda.svg"
import Vector from "./Vector.svg"
import Vector1 from "./Vector1.svg"

function Footer(){
    return(
        <div className="footer_container">
            <img className="left_leaf" src={Vector}></img>
            <div className="leftContainer">
                <img className="panda" src={Panda} alt="1" />
                <div>Wahaha.2022</div>
            </div>
            <div className="midContainer">
                <a className="footer__main" href="/">ГЛАВНАЯ</a>
                <a className="footer__menu" href="/">МЕНЮ</a>
                <a className="footer__faq" href="/">FAQ</a>
            </div>
            <div className="rightContainer">
                <a href="https://t.me/s/Wahaha_spb" className="tg">
                    <div className="first bg-Vector5"></div>
                    <div className="second bg-Vector7"></div>
                </a>

                <a href="https://vk.com/wahaha.tea.coffee?ysclid=l9x24mihdi352418586" className="vk">
                    <div className="first bg-Vector6">
                    </div>
                    <div className="second bg-Vector8"></div>
                </a>
                </div>
                <img className="right_leaf" src={Vector1}></img>
            </div>
            
    )
}
export default Footer