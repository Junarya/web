import React from 'react' 


function Next(props){

  const [isAdded, setIsAdded] = React.useState(false);
  const OnClickPlus = () =>{
   
      
      setIsAdded(!isAdded);}
  
  
   
  return(   
  <div className="Menu"> 
      <div className="slider">
          <div className="banner">
          <img src="http://placekitten.com/g/1360/455" alt="1.jpg"></img>
          <p>11</p>
      </div>
  
      <h1>Опции</h1>
  
      <div className="infoMenu">
              <div className="titleMenu">Объем</div>
              <img src="http://placekitten.com/g/71/68" alt="1.jpg"></img>
              <div className="intoMenu">500/700</div>
      </div>
  
  
      <div className="sliderMenu">

      </div>
  
  </div>
  
  
  
  
  </div>
   );}

export default Next;