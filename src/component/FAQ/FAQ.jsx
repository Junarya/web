import React, { useState } from "react";
import Data from "./data";
import "./faq.scss";
import leaf1 from "./leaf(3).svg";
import leaf2 from "./leaf(4).svg";
import image from "./balls.gif";
function FAQ() {
  const [selected, setSelected] = useState();
  const togle = (i) => {
    if (selected == i) {
      return setSelected();
    }
    setSelected(i);
  };
  return (
    <div className="">
      <todo />
      <div className="upperSide">
        <img className="leftleaf" src={leaf2}></img>
        <div className="div_faq">
          <div className="written_rectangle">
            <h1 className="written_faq">FAQ</h1>
          </div>
          <p className="written">Найди ответ на свой вопрос здесь!</p>
        </div>
        <img className="rightleaf" src={leaf1}></img>
      </div>
      <div className="wraper">
        <div className="accordion">
          {Data.map((item, i) => (
            <div className="item">
              <div className="tittle" onClick={() => togle(i)}>
                <div className="tittle_width">{item.question}</div>
                <div className="circle">
                  <p className={selected == i ? "plus_active" : "plus"}>+</p>
                </div>
              </div>
              <div className={selected == i ? "content_show" : "faq_content"}>
                <img className="faqPhoto" src={item.image} alt="1"></img>
                <p className="faqText">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;
