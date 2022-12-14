//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from "react";
import Main from "./component/Main/Main";
import Menu from "./component/Menu/Menu";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import ScrollToTopBtn from "./component/TopBtn";
import FAQ from "./component/FAQ/FAQ.jsx"
import Footer from "./component/Footer/Footer";
function App() {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  return (
    <div /*classNameName="wrapper"*/>
      <ScrollToTopBtn />
      <Header refProp1={myRef} refProp2={myRef2} refProp3={myRef3} />
      <Routes>
        {/*  Ссылки на другие страницы */}
        <Route
          path="/"
          element={
            <Main refProp1={myRef} refProp2={myRef2} refProp3={myRef3} />
          }
        />
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/faq" element={<FAQ />} exact />
    
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
