import {useState, useEffect} from 'react'
import './style/style.css'
import Sparow from '../../assets/Vector.png'

 function Carousel (props){
  const [index,setIndex] = useState(0)
     function manageIndexSub(){
         if(props.pictures.length-1>index){
             setIndex(index+1)
         }
     }
     function manageIndexDwn(){
        if(0<index){
            setIndex(index-1)
        }

     }
     
  
    return <div className="Carousel" style={{backgroundImage:`url(${props.pictures[index]})`}}>
        <button className="buttonSuivant" onClick={manageIndexSub}><img src={Sparow} alt="precedent"/></button>
        <button className="buttonPrecedent" onClick={manageIndexDwn}><img src={Sparow} alt="precedent"/></button>
        <p className="decompteImages">{index+1}/{props.pictures.length}</p>

        
       </div>
}

export default Carousel