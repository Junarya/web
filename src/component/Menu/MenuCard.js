import React from "react";

function MenuCard(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.onClick1();
        props.onClickCard();
      }}
    >
      <img className="imgCard" src={props.imageUrl} alt="1.jpg"></img>
      <div className="nameCard">{props.name}</div>
      <div className="infoMenuUpper">
        <div className="vCard"> 500 мл / 700 мл </div>
        <div className="infoCard">
          <div className="CardPrice">
            {props.price1}
            <i class="fa-solid fa-ruble-sign"></i> / {props.price2}
            <i class="fa-solid fa-ruble-sign"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
