import React from 'react' 

function FrappeCard(props){
    return(   
    <div className="card"> 
    <img className='imgCard' src={props.imageUrl} alt="1.jpg"></img>
    <div className="nameCard">{props.name}</div>
    <div className="vCard"> 500 мл/700 мл </div>
    <div className='infoCard' onClick={props.onClick1 }>
        <div className="CardPrice" onClick={props.onClickCard} >
            {props.price1}<i class="fa-solid fa-ruble-sign"></i> / {props.price2}<i class="fa-solid fa-ruble-sign"></i>
        </div>
    </div>
    </div>
     );}

export default FrappeCard;