//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   //<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from 'react' 

import Menu from './component/Menu/Menu'
import Header from './component/Header'
import PopUp from './component/PopUp'
import Next from './component/Next'
import { Routes, Route, Link } from 'react-router-dom' 
import FruitCard from './component/Menu/FruitCard'

function App(){

const[cartOpened, setCartOpened] = React.useState(false);

return(
  <div className='wrapper'>
    {cartOpened && <PopUp onClose={() => setCartOpened(false)}/> }
    
    <Header onClickCard={() => setCartOpened(true)} />

<div className="content">
<div>
<h1>All</h1>

      <Routes> {/*  Ссылки на другие страницы */}
        <Route path="/menu" element={<Menu />} exact />
      </Routes>


</div>
 
 

</div>

  </div>
  );
}


export default App;
