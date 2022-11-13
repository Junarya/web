import React from "react";
import Logo from "../img/main/logo.svg";
import { Link } from "react-router-dom";
import leaf_black from "../img/main/leaf_black.svg";
import fruit from "../img/main/fruit.svg";
import milk from "../img/main/milk.svg";
import frappe from "../img/main/frappe.svg";
import cofe from "../img/main/cofe.svg";
import Graph from "./Graph";

import { motion } from "framer-motion";

//"ingridients_text_param Montserrat_A"
function IngridientsBlock(props) {
  return (
    <div>
      <div className="ingridients_text" style={{ marginBottom: props.style }}>
        <img src={leaf_black} alt="" className="leaf" />
        <div className="Montserrat">
          <p className="font30">
            <b>{props.header}</b>
          </p>
          <p className="ingridients_text_param Montserrat_A">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

function Bottle(props) {
  return (
    <div className="col2 bottle1">
      <svg
        width="133"
        height="145"
        viewBox="0 0 133 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M53.7037 53.8404L10.7891 73.6705M10.7891 73.6705L32.3989 111.127M10.7891 73.6705L5.56093 64.6139M63.7483 126.848L72.0214 130.671C74.4951 131.815 77.4398 130.885 78.795 128.538L84.2403 119.104M96.0044 98.715L89.4682 110.041M60.7601 34.8623C52.4515 21.69 35.36 16.4041 20.7901 23.1399M20.7901 23.1399C5.03026 30.4217 -1.78863 48.9904 5.56093 64.6139M20.7901 23.1399C25.0408 21.1764 29.5034 20.2596 33.9024 20.2401L26.0274 3.50487C25.4147 2.19804 23.8535 1.63887 22.5402 2.24352L3.51559 11.0338C2.20232 11.6449 1.63421 13.1923 2.24624 14.4927L10.1212 31.2279C12.9682 27.9056 16.5413 25.1034 20.7901 23.1399ZM5.56093 64.6139L55.4151 41.5721M70.708 38.2301L127.782 64.6138M70.708 38.2301L67.0654 48.0281M70.708 38.2301C78.0576 22.6131 96.7915 15.8515 112.552 23.1399M127.782 64.6138L122.554 73.6706M127.782 64.6138C135.131 48.9903 128.313 30.4217 112.552 23.1399M122.554 73.6706L67.0654 48.0281M122.554 73.6706L85.5214 137.855C82.8109 142.556 76.9215 144.409 71.9741 142.12L46.6738 130.43C41.7271 128.142 39.3741 122.479 41.262 117.401L67.0654 48.0281M88.9684 74.997C76.6406 81.9343 56.6898 81.9343 44.362 74.997M88.9684 88.0003C76.6406 94.9376 56.6898 94.9376 44.362 88.0003M112.552 23.1399C108.299 21.1699 103.832 20.2595 99.4286 20.24L107.303 3.50481C107.916 2.19798 109.477 1.63881 110.79 2.24346L129.815 11.0337C131.128 11.6449 131.696 13.1923 131.083 14.4926L123.214 31.2214C120.368 27.899 116.797 25.0969 112.552 23.1399Z"
          stroke="black"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function Main(props, ref) {
  const item_left = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0, transition: { delay: 0.3 } }
  };
  const item_right = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0, transition: { delay: 0.3 } }
  };
  const item_mid = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0, transition: { delay: 0.5 } }
  };
  const item_chat = {
    hidden: { display: "none", opacity: 0 },
    show: { display: "block", opacity: 1 }
  };
  const arrInfo = [
    {
      header: "Заботимся о качестве",
      text: "Мы верим, что только качественные чай и кофе могут придать напитку неповторимый вкус и аромат.",
      style: "30px"
    },
    {
      header: "Уделяем внимание мелочам",
      text: "Используем свежее молоко, а также соевое, миндальное и кокосовое молоко, если обычное молоко не для вас.",
      style: "30px"
    },
    {
      header: "Готовим с пользой",
      text: "Мы против порошков и искусственных добавок. В рецептах наших напитков мы используем только натуральные топпинги богатые полезными свойствами.",
      style: "0"
    }
  ];
  return (
    <div className="content_dasha">
      <motion.div
        className="head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.img
          variants={item_left}
          src={require("../img/main/drink.png")}
          alt="напитки"
          className="drink"
        />
        <motion.img
          variants={item_mid}
          src={Logo}
          alt="логотип"
          className="logo"
        />
        <motion.img
          variants={item_right}
          src={require("../img/main/drink.png")}
          alt="напитки"
          className="drink"
        />
      </motion.div>
      <div id="about" className="o_nas_blok" ref={props.refProp1}>
        <div className="block-cent">
          <div className="headline">
            <h1>O НАС</h1>
          </div>
        </div>
        <div className="container o_nas_inside">
          <div className="o_nas_img">
            <img src={require("../img/main/1 1.png")} alt="" className="col2" />
            <div className="col2 flex_img">
              <img
                src={require("../img/main/image 21.png")}
                alt=""
                className="immg"
              />
              <img
                src={require("../img/main/image 22.png")}
                alt=""
                className="immg"
              />
            </div>
          </div>
          <div className="col8 o_nas_text">
            <p className="Montserrat_A lineD">
              Лавка напитков Wahaha является одной из <b>ПЕРВЫХ</b> в России с
              оригинальными чаями. Это новый тренд из Китая.
            </p>
            <p className="Montserrat_A lineD">
              Когда мы впервые задумались о бренде Wahaha, в голове была мысль
              сделать место, соединяющее культуры разных стран. Азия и Европа -
              два диаметральных мира в едином сочетании невероятных вкусов. В
              результате мы создали палитру напитков с нотками обеих частей
              света.
            </p>
          </div>
        </div>
      </div>
      <div className="tagline">
        <div className="container info">
          <Bottle />
          <div className="col8">
            <div className="Montserrat_A font30 border">
              <p style={{ marginBottom: "30px" }}>
                МЫ ГОТОВИМ ВКУСНЫЙ НАТУРАЛЬНЫЙ ЧАЙ
              </p>
              <p>Проявляем заботу и любовь во всем</p>
            </div>
          </div>
          <Bottle />
        </div>
      </div>
      <div className="ingridients">
        <div className="container ingridients_flex">
          <div className="col7">
            <div>
              {arrInfo.map((item) => (
                <IngridientsBlock {...item} />
              ))}
            </div>
          </div>
          <div className="col4">
            <img
              className="video"
              src={require("../img/main/video.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="statistica">
        <div className="container">
          <div className="stat_flex">
            <div className="col4">
              <div className="my_imeem">
                <p className="Montserrat font30">
                  <b>На сегодня мы имеем</b>
                </p>
              </div>
              <ul className="list Montserrat_A">
                <li>2 кафе</li>
                <li>15 бариста</li>
                <li>более 30 напитков в меню</li>
                <li>более 4000 стаканов в месяц</li>
              </ul>
            </div>
            <motion.div
              className="col7"
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
            >
              <motion.div className="chart" variants={item_chat}>
                <Graph></Graph>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="menu_dasha" ref={props.refProp2}>
        <div className="block-cent">
          <div className="headline">
            <h1>НАШИ НАПИТКИ</h1>
          </div>
          <div>
            <p className="Montserrat_A">
              Наши авторские, безумно вкусные напитки делятся на 4 вида
            </p>
          </div>
        </div>
        <div className="menu_block Montserrat_A container">
          <div className="col3 menu_img">
            <img className="boba_menu_img" src={fruit} alt="" />
            <p>Фруктовые чаи</p>
          </div>
          <div className="col3 menu_img">
            <img className="boba_menu_img" src={milk} alt="" />
            <p>Молочные чаи</p>
          </div>
          <div className="col3 menu_img">
            <img className="boba_menu_img" src={frappe} alt="" />
            <p>Фраппе</p>
          </div>
          <div className="col3 menu_img">
            <img className="boba_menu_img" src={cofe} alt="" />
            <p>Кофе</p>
          </div>
        </div>
        <div className="block-cent">
          <Link to="/menu">
            <button
              type="button"
              action="/menu"
              className="menu_btn Montserrat"
            >
              <p>Меню</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="contacts" ref={props.refProp3}>
        <div className="block-cent">
          <div className="headline">
            <h1>КОНТАКТЫ</h1>
          </div>
        </div>
        <div className="container">
          <div className="contacts_info">
            <iframe
              className="map"
              title="yandex"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A507ed5e12a37364f31f15812cebf2e17e56006b510cbc99f5cd0f5dfcd03712e&amp;source=constructor"
              width="638"
              height="502"
              frameborder="0"
            ></iframe>

            <iframe
              className="map2"
              title="yandex"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a4f40f21d30bc789f795c04337dc65b76f901bc09748c41a436f4bdf356d464&amp;source=constructor"
              width="520"
              height="418"
              frameborder="0"
            ></iframe>
            <iframe
              className="map3"
              title="yandex"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a4f40f21d30bc789f795c04337dc65b76f901bc09748c41a436f4bdf356d464&amp;source=constructor"
              width="400"
              height="400"
              frameborder="0"
            ></iframe>
            <div className="col6 Montserrat_A">
              <div className="social">
                <div className="vk soc_link">
                  <div className="bg-Vector"></div>
                  <a class="links" href="https://vk.com/wahaha.tea.coffee">
                    vk.com/wahaha.tea.coffee
                  </a>
                </div>
                <div className="tg soc_link">
                  <div className="bg-Path_3"></div>
                  <a class="links" href="https://t.me/Wahaha_spb">
                    t.me/Wahaha_spb
                  </a>
                </div>
                <div className="tel soc_link">
                  <div className="bg-Vector2"></div>
                  <p>+7 (981) 190-88-66</p>
                </div>
              </div>
              <p className="Montserrat" style={{ padding: "45px 0" }}>
                АДРЕСА
              </p>
              <div className="adresses">
                <div className="adress1">
                  <div className="bg-Vector3"></div>
                  <div className="adres_link">
                    <p>м. Площадь Восстания</p>
                    <p>Невский проспект, 87/2, Санкт-Петербург</p>
                  </div>
                </div>
                <div className="adress2">
                  <div className="bg-Vector3"></div>
                  <div className="adres_link">
                    <p>м. Технологический институт-1</p>
                    <p>Загородный проспект, 70, Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
