import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faPerson} from "@fortawesome/free-solid-svg-icons";



function Header(props){
    return(
        <header>
        <div className="headerLeft"  >
        <img src="http://placekitten.com/g/40/40" alt="1.jpg"></img>
        <div className="headerInfo">
          <h3 >Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>    
      
       <ul className="headeRight">
        <li className="icon" onClick={props.onClickCard}>
           <FontAwesomeIcon  className="icon1"  icon={faCartShopping } />
          <span>1256</span>
        </li>
        <li>  
        <FontAwesomeIcon icon={faPerson} /> </li>
       </ul>
       </header>);}

export default Header;