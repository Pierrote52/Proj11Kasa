import {useState, useEffect} from 'react'
import './style/style.css'

 function Carousel (props){
  const [index,setIndex] = useState(0)
     function manageIndexSub(){
         if(props.pictures.length>index){
             setIndex(index+1)
         }
     }
  
    return <div className="Carousel" style={{backgroundImage:`url(${props.pictures[index]})`}}>
        <button onClick={manageIndexSub}>Suivant</button>
        <button>Precedent</button>

        
       </div>
}

export default Carousel