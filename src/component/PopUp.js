function PopUp({onClose, onRemove, items=[]}){
  return(
    <div  className="drawer"  > 
      <div >
        {
          items.map((obj)=>
          <div className="cartItems" > 
            <div className="imgPopUp"> 
              <img src={(obj.imageUrl)}  alt="11.png"></img>
            </div>
            <div className="textPopUp">
              <div className="vCard"> Название:  {obj.name}</div>
              <div>Цена: {obj.price1}</div>
              <div> Цена: {obj.price2}</div>
              <div className="PopUpItem">Состав:</div>
              <div className="PopUpText">Молоко, вода</div>
            </div>
            
            <button className='btnPopUp' onClick={()=>onRemove(obj.name)} >
              <i  onClick={onClose}  class="fa-solid fa-close iconPopUp"></i>
            </button>
          </div>
        )}
      </div>
    </div> 
  );}

export default PopUp;