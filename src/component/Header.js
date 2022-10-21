import { Link } from 'react-router-dom'  /*    Link - обычная ссылка как тег a*/


function Header(props){
  return(
    <header>
      <Link className='link' to = "/"> {/*   /  - переход на главную страницу*/ }
        <div className="headerLeft"  >
          <img src="http://placekitten.com/g/78/79" alt="1.jpg"></img>
          <div className="headerInfo">
            <h3 >Wahaha</h3>
          </div>
        </div> 
      </Link>
      <ul className="headeRight">
        <Link className='link' to = "/">
          <li className="icon" /*onClick={props.onClickCard}*/>
            Главная
            <div className='icon_down'>
              <i class="fa-solid fa-chevron-down "></i>
            </div> 
            <div className="menu_hidden">
              <ul className='menu'>
                <li><Link className='menu_link' to = "/next">О нас</Link></li>
                <li><Link className='menu_link' to = "/">Напитки</Link></li>
                <li><Link className='menu_link' to = "/">Контакты</Link></li>
              </ul>
            </div>
          </li>
        </Link>
        <Link className='link' to = "/next">
          <li className="icon" /*onClick={props.onClickCard}*/>
            Меню
          </li>
        </Link>

        <Link className='link' to = "/">
          <li className="icon" /*onClick={props.onClickCard}*/>
              FAQ
          </li>
        </Link>
      </ul>

    </header>);}

export default Header;