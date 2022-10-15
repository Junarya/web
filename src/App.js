//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   //<img src="http://placekitten.com/g/110/110" alt="1.jpg"></img>
import React from 'react' 
import Card from './component/Card'
import Header from './component/Header'
import Drawer from './component/Drawer'


const arr=[
  {name: 'Lorem ipsum dolor sit', price: 15251 , imageUrl: "http://placekitten.com/g/123/112"},
  {name: 'adipisicing elit. ', price: 135571,  imageUrl: "http://placekitten.com/g/128/122"},
  {name: 'Lorem ipsum dolor ', price: 124251, imageUrl: "http://placekitten.com/g/123/112"},
  {name: 'adipisic dolore?cv', price: 1255571,  imageUrl: "http://placekitten.com/g/128/112"},
  {name: 'Lorem ipsum dolor sit', price: 15251 , imageUrl: "http://placekitten.com/g/123/112"},
  {name: 'adipisicing elit. ', price: 135571,  imageUrl: "http://placekitten.com/g/128/122"},
  {name: 'Lorem ipsum dolor ', price: 124251, imageUrl: "http://placekitten.com/g/123/112"},
  {name: 'adipisic dolore?cv', price: 1255571,  imageUrl: "http://placekitten.com/g/128/112"},
]
function App(){

const[cartOpened, setCartOpened] = React.useState(false);

const [searchValue, setSearchValue] = React.useState('');


  return(
  <div className='wrapper'>

{cartOpened && <Drawer onClose={() => setCartOpened(false)}/> }


<Header onClickCard={() => setCartOpened(true)} />


<div className="content">
<div>
<h1>All</h1>
<div className='search-block'>
<i class="fa-solid fa-search"></i>
<input onChange={onChangeSearvhInput} placeholder='Поик...'></input>
</div>
</div>
<div className="cardAll">



{ arr.map((obj) => (
<Card 
  name={obj.name}
  price = {obj.price}
  imageUrl = {obj.imageUrl}
 
/>
))
}

</div>
 
    
</div>

  </div>
  );
}


export default App;
