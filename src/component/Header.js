import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGhost} from "@fortawesome/free-solid-svg-icons";
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'  /*    Link - обычная ссылка как тег a*/


function Header(props){
    return(
        <header>
          <Link className='link' to = "/"> {/*   /  - переход на главную страницу*/ }
                  <div className="headerLeft"  >
                  <img src="http://placekitten.com/g/40/40" alt="1.jpg"></img>
                  <div className="headerInfo">
                    <h3 >Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  </div>    
          </Link>
       <ul className="headeRight">
        <li className="icon" onClick={props.onClickCard}>
           <FontAwesomeIcon  className="icon1"  icon={faGhost } />
          <span>fddf</span>
        </li>
        <Link className='link' to = "/next">
            <li>  
            <FontAwesomeIcon icon={faPerson} /> 
            </li>
        </Link>
       </ul>
       </header>);}

export default Header;