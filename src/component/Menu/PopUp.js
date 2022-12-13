function PopUp({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        {items.map((obj) => (
          <div className="cartItems">
            <div>
              <img className="PopUmImg" src={obj.imageUrl} alt="11.png"></img>
            </div>
            <div className="textPopUp">
              <div className="PopUpName"> {obj.name}</div>
              <div className="PopUpMl">500 мл / 700 мл</div>
              <div className="PopUpPrice">
                {obj.price1}
                <i class="fa-solid fa-ruble-sign" /> / {obj.price2}
                <i class="fa-solid fa-ruble-sign" />
              </div>
              <div className="PopUpInfa">{obj.infa}</div>
              <div className="PopUpSostav">Состав: {obj.sost}</div>
            </div>

            <button
              className="btnPopUpClose"
              onClick={() => {
                onRemove(obj.name);
                onClose();
              }}
            >
              <i class="fa-solid fa-close iconPopUp"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopUp;
//cursor: pointer
