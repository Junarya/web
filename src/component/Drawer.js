 //style ={{display: 'none'}}
function Drawer(props){
    return(
      <div  className="overlay">
      <div className="drawer">
      <button className='btn' onClick={props.onClose}>
    <i  class="fa-solid fa-plus"></i>
    </button>
      </div>
 
      </div>);}

export default Drawer;