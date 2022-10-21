import React from 'react' 

function Card(props){


const [isAdded, setIsAdded] = React.useState(false);
const OnClickPlus = () =>{
 
    
    setIsAdded(!isAdded);}


 
return(
<div className="card"> 
    <img className='imgCard' src={props.imageUrl} alt="1.jpg"></img>
        <p>{props.name}</p>500 мл/700 мл
            <div className='infoCard'>
            <div className="CardPrice">
                        {props.price1}P/{props.price2}P
            </div>
            
            {/* тут была кнопка 
             
            <img onClick = {OnClickPlus}  className= "plus"  src= {isAdded ? "http://placekitten.com/g/20/50" : "http://placekitten.com/g/50/20" }     alt="1"></img>

*/}
            </div>
</div>);}

export default Card;