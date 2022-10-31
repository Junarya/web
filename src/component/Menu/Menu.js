 
import { Routes, Route, Link } from 'react-router-dom' 
import FruitCard from './FruitCard'
import FrappeCard from './FrappeCard'
import React, { useEffect, setState, useState }  from 'react';
import PopUp  from '../PopUp';
 






function Menu(props){

    const arrFruit=[
        {name: 'Гранатовый браслет', price1: 263 , price2: 283 , imageUrl: require('./menu/1.png')},
        {name: 'Румяный личи ', price1: 213 , price2: 283 , imageUrl: require('./menu/2.png')},
        {name: 'Киви изобилие', price1: 163 , price2: 183 , imageUrl: require('./menu/3.png')},
        {name: 'Жаркие тропики', price1: 263 , price2: 283 , imageUrl: require('./menu/4.png')},
        {name: 'Манго-маракуйа', price1: 263 , price2: 283 , imageUrl: require('./menu/5.png')},
      ]

      const arrFrapp=[
        {name: 'Название Название', price1: 263 , price2: 283 , imageUrl: require('./menu/1.png')},
        {name: 'Название Название1', price1: 263 , price2: 283 , imageUrl: require('./menu/2.png')},
        {name: 'Название Название', price1: 263 , price2: 283 , imageUrl: require('./menu/5.png')},
      ]


    const category =[ "Все меню", "Фруктовые чаи", "Молочные чаи", "Фраппе", "Кофе"]

    /* Функция для вызова категории меню  */
    const [activeIndex, setActiveIndex] = React.useState(0);
    const onClickMenu = (index)=>{
        setActiveIndex(index);
    }
    
    const[categoryId, setCategoryId] =React.useState(0);
    
    
    const[menuItems, setMenuItems]=React.useState([]);
    const[cartOpened, setCartOpened] = React.useState(false);
    const onAddToPopUp=(obj)=>{
            setMenuItems((prev)=>[...prev, obj])
    };

    const onRemoveItem =(name) => 
    {setMenuItems((prev)=>prev.filter(menuItems=>menuItems.name!==name))}

const [show, setShow] = useState(false)



return(   
<div className="menuCard"> 
    <div className="slider">
        <div className="banner">
            <img src="http://placekitten.com/g/1360/455" alt="1.jpg"></img>
            <p>111</p>
        </div>

        <div className='titleMenuCard'>Опции</div>

        <div className="infoMenu">
            <div className="infoMenuCard1">
                <div className="titleMenu">Объем</div>
                <div className="imgTextCard">
                <img className='imgCardMenu' src="http://placekitten.com/g/71/68" alt="1.jpg"></img>
                <div className="intoMenu">500 мл / 100 мл</div>
                </div>

                <div className="titleMenu">Температура</div>
                <div className="imgTextCard">
                    <img className='imgCardMenu' src="http://placekitten.com/g/71/71" alt="1.jpg"></img>
                    <div className="intoMenu">холодный / теплый / горячий</div>
                </div>
            </div>

            <div className="infoMenuCard2">
                <div className="titleMenu">Сладость</div>
                <div className="imgTextCard">
                    <img className='imgCardMenu' src="http://placekitten.com/g/71/36" alt="1.jpg"></img>
                    <div className="intoMenu">0% / 25% / 50% / 75% / 100%</div>
                </div>

                <div className="titleMenu">Топпинг</div>
                <div className="imgTextCard">
                    <img  className='imgCardMenu' src="http://placekitten.com/g/71/36" alt="1.jpg"></img>
                    <div className="intoMenu">тапиока / тапиока-желе / пуддинг / сырная пенка</div>
                </div>
            </div>

            <div className="infoMenuCard3">
                <div className="titleMenu">Альтернативное молоко +40₽</div>
                <div className="imgTextCard">
                    <img  className='imgCardMenu' src="http://placekitten.com/g/50/80" alt="1.jpg"></img>
                    <div className="intoMenu">кокосовое / соевое / миндальное</div>
                </div>        
            </div>
        </div>
    </div>
   <div className="sliderMenu">
        
   

   {
    category.map((value, i)=>(
    <button key={i} onClick={() => onClickMenu(i)} className={activeIndex==i ? "btnMenuActive" : "btnMenu"}>{value}</button>)
)}
        
    
    </div>

    <div className="menuCardUpper">
  
 <div   className='fruitMenu'  >
            {cartOpened && <PopUp items={menuItems} onClose={() =>  setCartOpened(false)}   onRemove={onRemoveItem} /> }
            <div className="titleMenuBlock">Фруктовые чаи</div>
            <div className="cardAll" >
                <Routes>
                    <Route path="/" element={arrFruit.map((item, i) => 
                        (
                            <FruitCard  {...item} index={i}  onClickCard={(obj) => onAddToPopUp(item) }  onClick1={() => setCartOpened(true) } />
                        ))} 
                    exact />
                </Routes>
            </div>
        </div>
       
          <div className='frappeMenu' >
            {cartOpened && <PopUp onClose={() => setCartOpened(false)} onRemove={onRemoveItem}   /> }
            <div className="titleMenuBlock">Фраппе</div>
            <div className="cardAll">
                <Routes>
                    <Route path="/" element={arrFrapp.map((item) => 
                        (
                            <FrappeCard {...item}     onClickCard={(obj) => onAddToPopUp(item) }  onClick1={() => setCartOpened(true) } />
                        ))} 
                    exact />
                </Routes>
            </div>
        </div> 



    </div>
</div>
 );}

export default Menu;