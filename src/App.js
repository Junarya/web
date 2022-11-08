//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from "react";

import Main from "./component/Main/Main";
import Menu from "./component/Menu/Menu";
import Header from "./component/Header";
import PopUp from "./component/PopUp";
import { Routes, Route } from "react-router-dom";
import FruitCard from "./component/Menu/FruitCard";
import Logo from "./component/img/main/logo.svg";
import { useRef } from "react";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const myRef = useRef(null);
  return (
    <div /*classNameName="wrapper"*/>
      {cartOpened && <PopUp onClose={() => setCartOpened(false)} />}

      <Header
        refProp1={myRef}
        refProp2={myRef}
        refProp3={myRef}
        onClickCard={() => setCartOpened(true)}
      />
      <Routes>
        {/*  Ссылки на другие страницы */}
        <Route
          path="/"
          element={<Main refProp1={myRef} refProp2={myRef} refProp3={myRef} />}
        />
        <Route path="/menu" element={<Menu />} exact />
      </Routes>
    </div>
  );
}

export default App;
