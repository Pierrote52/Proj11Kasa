import {useState, useEffect} from 'react'
import './style/style.css'
import Sparow from '../../assets/Vector.png'

 function Carousel (props){
  const [index,setIndex] = useState(0)
  const [displayButtons, setDisplayButton]=useState(true);
     function manageIndexSub(){
         if(props.pictures.length-1>index){
             setIndex(index+1)
         }else if(props.pictures.length-1===index){
             setIndex(0)
         }
     }
     function manageIndexDwn(){
        if(0<index){
            setIndex(index-1)
        }else if(index===0){
            setIndex(props.pictures.length-1)

        }

     }
     useEffect(()=>{
         if(props.pictures.length===1){
             setDisplayButton(false)
         }

     },[props])
     
  
    return <div className="Carousel" style={{backgroundImage:`url(${props.pictures[index]})`}}>
        <button className="buttonSuivant" onClick={manageIndexSub} style={{display:displayButtons?"block":"none"}}><img src={Sparow} alt="precedent"/></button>
        <button className="buttonPrecedent" onClick={manageIndexDwn} style={{display:displayButtons?"block":"none"}}><img src={Sparow} alt="precedent"/></button>
        <p className="decompteImages">{displayButtons?`${index+1}/${props.pictures.length}`:""}</p>

        
       </div>
}

export default Carousel