import React from "react";
import Logo from "../img/main/logo.svg";
import { Link } from "react-router-dom";

function Main(props, ref) {
  return (
    <div className="content_dasha">
      <div className="head">
        <img
          src={require("../img/main/drink.png")}
          alt="напитки"
          className="drink"
        />
        <img src={Logo} alt="логотип" className="logo" />
        <img
          src={require("../img/main/drink.png")}
          alt="напитки"
          className="drink"
        />
      </div>
      <div id="about" className="o_nas_blok" ref={props.refProp1}>
        <div className="block-cent">
          <div className="headline">
            <h1>O НАС</h1>
          </div>
        </div>
        <div className="container o_nas_inside">
          <div className="o_nas_img">
            <img src="1 1.png" alt="" className="col2" />
            <div className="col2 flex_img">
              <img src="image 21.png" alt="" className="immg" />
              <img src="image 22.png" alt="" className="immg" />
            </div>
          </div>
          <div className="col8 o_nas_text">
            <p className="Montserrat_A line">
              Лавка напитков Wahaha является одной из <b>ПЕРВЫХ</b> в России с
              оригинальными чаями. Это новый тренд из Китая.
            </p>
            <p className="Montserrat_A line">
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
          <div className="col2 bottle1">
            <img src="bottle.svg" alt="" />
          </div>
          <div className="col8">
            <div className="Montserrat_A font30 border">
              <p style={{ marginBottom: "30px" }}>
                МЫ ГОТОВИМ ВКУСНЫЙ НАТУРАЛЬНЫЙ ЧАЙ
              </p>
              <p>Проявляем заботу и любовь во всем</p>
            </div>
          </div>
          <div className="col2 bottle1">
            <img src="bottle.svg" alt="" className="transform" />
          </div>
        </div>
      </div>
      <div className="ingridients">
        <div className="container ingridients_flex">
          <div className="col7">
            <div>
              <div className="ingridients_text">
                <img src="листики.svg" alt="" className="leaf" />
                <div className="Montserrat">
                  <p className="font30">
                    <b>Заботимся о качестве</b>
                  </p>
                  <p className="ingridients_text_param Montserrat_A">
                    Мы верим, что только качественные чай и кофе могут придать
                    напитку неповторимый вкус и аромат.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="ingridients_text">
                <img src="листики.svg" alt="" className="leaf" />
                <div className="Montserrat">
                  <p className="font30">
                    <b>Уделяем внимание мелочам</b>
                  </p>
                  <p className="ingridients_text_param Montserrat_A">
                    Используем свежее молоко, а также соевое, миндальное и
                    кокосовое молоко, если обычное молоко не для вас.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ margin: 0 }} className="ingridients_text">
                <img src="листики.svg" alt="" className="leaf" />
                <div className="Montserrat">
                  <p className="font30">
                    <b>Готовим с пользой</b>
                  </p>
                  <p className="ingridients_text_param Montserrat_A">
                    Мы против порошков и искусственных добавок. В рецептах наших
                    напитков мы используем только натуральные топпинги богатые
                    полезными свойствами.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col4">
            <img src="выбор видоса.png" alt="" />
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
            <div className="col7">
              <img className="stat_graph" src="график.jpg" alt="" />
            </div>
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
            <img classNameName="boba_menu_img" src="" alt="" />
            <p>Фруктовые чаи</p>
          </div>
          <div className="col3 menu_img">
            <img classNameName="boba_menu_img" src="Group 21.png" alt="" />
            <p>Фруктовые чаи</p>
          </div>
          <div className="col3 menu_img">
            <img classNameName="boba_menu_img" src="Group 21.png" alt="" />
            <p>Фруктовые чаи</p>
          </div>
          <div className="col3 menu_img">
            <img classNameName="boba_menu_img" src="Group 21.png" alt="" />
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
            <div className="col6 Montserrat_A">
              <div className="social">
                <div className="vk soc_link">
                  <div className="bg-Vector"></div>
                  <Link>vk.com/wahaha.tea.coffee</Link>
                </div>
                <div className="tg soc_link">
                  <div className="bg-Path_3"></div>
                  <Link>vk.com/wahaha.tea.coffee</Link>
                </div>
                <div className="tel soc_link">
                  <div className="bg-Vector2"></div>
                  <a href="https://vk.com/wahaha.tea.coffee">
                    vk.com/wahaha.tea.coffee
                  </a>
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
