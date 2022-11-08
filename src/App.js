//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from "react";

import Main from "./component/Main/Main";
import Menu from "./component/Menu/Menu";
import Header from "./component/Header";
import PopUp from "./component/PopUp";
import Next from "./component/Next";
import { Routes, Route, Link } from "react-router-dom";
import FruitCard from "./component/Menu/FruitCard";
import Logo from "./component/img/main/logo.svg";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div /*classNameName="wrapper"*/>
      {cartOpened && <PopUp onClose={() => setCartOpened(false)} />}

      <Header onClickCard={() => setCartOpened(true)} />
      <Routes>
        {/*  Ссылки на другие страницы */}
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} exact />
      </Routes>
    </div>
  );
}

export default App;
