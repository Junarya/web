//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   //<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from 'react' 

import Menu from './component/Menu/Menu'
import Header from './component/Header'
 
import Next from './component/Next'
import { Routes, Route, Link } from 'react-router-dom' 
 

function App(){

const[cartOpened, setCartOpened] = React.useState(false);

return(
  <div className='wrapper'>
    
    
    <Header onClickCard={() => setCartOpened(true)} />

<div className="content">
<div>
 

      <Routes> {/*  Ссылки на другие страницы */}
        <Route path="/menu" element={<Menu />} exact />
     
      </Routes>


</div>
 


</div>

  </div>
  );
}


export default App;
