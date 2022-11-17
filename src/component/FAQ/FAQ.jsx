import React, {useState} from "react"
import Data from "./data";
import './faq.scss'

function FAQ(){
    const [selected, setSelected] = useState()
    const togle = (i) =>{
        if (selected == i){
            return setSelected()
        }
        setSelected(i)
    }
    return(
        <div className="wraper">
            <div className="accordion">
                {Data.map((item,i)=>(
                    <div className="item">
                        <div className="tittle" onClick={()=>togle(i)}>
                            <div>{item.question}</div>
                                <div className={selected == i ? 'plus_active' : 'plus'}>+</div>
                        </div>
                        <div className={selected == i ? 'content_show' : 'content'}>
                            <div>{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}
export default FAQ