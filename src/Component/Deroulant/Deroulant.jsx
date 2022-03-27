import Sparow from "../../assets/Vector.png"
import './style/style.css'
import {useState} from 'react'

function Deroulant(props){
    const [isOpen, setIsOpen]=useState(true)

    return  <div className="deroulant">
                <div className={isOpen ? "titleEtSparowClosed":"titleEtSparowOpen"}>
                    <p>{props.equipments ? "Équipements":props.titre}</p>
                    <button onClick={()=>{setIsOpen(!isOpen)}}><img src={Sparow} alt="derouler"/></button>
                </div>
                <div className="contenu" style={isOpen ? {display:"none"}:{display:"block"}}>
                    {props.equipments ? <ul>{
                        props.equipments.map((element, index)=>{
                            return <li key ={`${index}-${props.id}-45`}>{element}</li>

                        })
                        }</ul> :props.description}
                </div>

            </div>

}

export default Deroulant

