import Button from "./Button";
import Carusel from "./Carusel";
import PopUp from "./PopUp";
import React from "react";
import MenuCard from "./MenuCard";
function Menu() {
  const [buttonIndex, setButtonIndex] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://636cf0c1ab4814f2b273204d.mockapi.io/items?category=" +
        buttonIndex
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [buttonIndex]);
  const [menuItems, setMenuItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const onAddToPopUp = (obj) => {
    setMenuItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (name) => {
    setMenuItems((prev) => prev.filter((menuItems) => menuItems.name !== name));
  };

  return (
    <div>
      <div className="content carusel">
        <Carusel
          imgs={[
            require("./menu/баннер.png"),
            require("./menu/2.png"),
            require("./menu/3.png")
          ]}
        />
      </div>

      <div className="background_menu">
        <div className="titleOption">
          <h1>ОПЦИИ</h1>
        </div>
        <div className="content itemOption">
          <div className="container2">
            <div className="optionFirstCol">
              <div className="nameOption">Объем</div>
              <div className="OptionCard">
                <img
                  className="imgOption"
                  src={require("./menu/cup.png")}
                  alt="1.jpg"
                ></img>
                <div className="textOptions">500 мл / 100 мл</div>
              </div>
              <div className="nameOption temp">Температура</div>
              <div className="optionTemp">
                <div className="OptionCard">
                  <img
                    className="imgOption"
                    src={require("./menu/temp.png")}
                    alt="1.jpg"
                  ></img>
                  <div className="textOptions">холодный / теплый / горячий</div>
                </div>
              </div>
            </div>
            <div className="optionSecondCol">
              <div className="nameOption">Сладость</div>
              <div className="OptionCard">
                <img
                  className="imgOption"
                  src={require("./menu/lozka.png")}
                  alt="1.jpg"
                ></img>
                <div className="textOptions">0% / 25% / 50% / 75% / 100%</div>
              </div>
              <div className="nameOption topping">Топпинг</div>
              <div className="optionTopping">
                <div className="OptionCard">
                  <img
                    className="imgOption"
                    src={require("./menu/shar.png")}
                    alt="1.jpg"
                  ></img>
                  <div className="textOptions">
                    тапиока / тапиока-желе / пуддинг / сырная пенка
                  </div>
                </div>
              </div>
            </div>
            <div className="optionThirdCol">
              <div className="nameOption">Альтернативное молоко +40₽</div>
              <div className="OptionCard">
                <img
                  className="imgOption"
                  src={require("./menu/milk.png")}
                  alt="1.jpg"
                ></img>
                <div className="textOptions">
                  кокосовое / соевое / миндальное
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button value={buttonIndex} onClickCategory={(i) => setButtonIndex(i)} />
      <div className="container2 line"></div>
      <div className="menuUpper">
        <div>
          {cartOpened && (
            <PopUp
              items={menuItems}
              onClose={() => setCartOpened(false)}
              onRemove={onRemoveItem}
            />
          )}
          <div className="cardAll">
            {items.map((obj) => (
              <MenuCard
                key={obj.id}
                {...obj}
                onClickCard={(ob) => onAddToPopUp(obj)}
                onClick1={() => setCartOpened(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
