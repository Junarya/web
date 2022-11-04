//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from "react";

import Main from "./component/Main";
import Menu from "./component/Menu/Menu";
import Header from "./component/Header";
import PopUp from "./component/PopUp";
import Next from "./component/Next";
import { Routes, Route, Link } from "react-router-dom";
import FruitCard from "./component/Menu/FruitCard";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {cartOpened && <PopUp onClose={() => setCartOpened(false)} />}

      <Header onClickCard={() => setCartOpened(true)} />

      <div>
        <div>
          <Routes>
            {" "}
            {/*  Ссылки на другие страницы */}
            <Route path="/menu" element={<Menu />} exact />
          </Routes>
        </div>
      </div>
      <div class="head">
        <img src="Group 51.png" alt="лого" class="drink" />
        <img src="logo.png" alt="лого" class="logo" />
        <img src="Group 51.png" alt="лого" class="drink" />
      </div>
      <div class="o_nas_blok">
        <div class="block-cent">
          <div class="headline">
            <h1>O НАС</h1>
          </div>
        </div>
        <div class="container o_nas_inside">
          <div class="o_nas_img">
            <img src="1 1.png" alt="" class="col2" />
            <div class="col2 flex_img">
              <img src="image 21.png" alt="" class="immg" />
              <img src="image 22.png" alt="" class="immg" />
            </div>
          </div>
          <div class="col8 o_nas_text">
            <p class="Montserrat_A line">
              Лавка напитков Wahaha является одной из <b>ПЕРВЫХ</b> в России с
              оригинальными чаями. Это новый тренд из Китая.
            </p>
            <p class="Montserrat_A line">
              Когда мы впервые задумались о бренде Wahaha, в голове была мысль
              сделать место, соединяющее культуры разных стран. Азия и Европа -
              два диаметральных мира в едином сочетании невероятных вкусов. В
              результате мы создали палитру напитков с нотками обеих частей
              света.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
