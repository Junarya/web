import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card(props){


const [isAdded, setIsAdded] = React.useState(false);
const OnClickPlus = () =>{
 
    
    setIsAdded(!isAdded);}


 
return(   
<div className="card"> 
<img className='imgCard' src={props.imageUrl} alt="1.jpg"></img>
<div className="nameCard">{props.name}</div>
<div className="vCard"> 500 мл/700 мл </div>
<div className='infoCard'>
    <div className="CardPrice">
        {props.price1}<i class="fa-solid fa-ruble-sign"></i> / {props.price2}<i class="fa-solid fa-ruble-sign"></i>
    </div>
        {/* тут была кнопка 
        <img onClick = {OnClickPlus}  className= "plus"  src= {isAdded ? "http://placekitten.com/g/20/50" : "http://placekitten.com/g/50/20" }     alt="1"></img>
        */
        }
</div>
</div>
 );}

export default Card;