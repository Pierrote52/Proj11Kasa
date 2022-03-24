import './style/style.css'
import etoileLike from '../../assets/Like.png'
import EtoileUnlike from '../../assets/unLike.png'
import {useEffect, useState} from 'react'

function EtoileNote(props){
        let listeEtoiles =[]
        let nombreDeLike = props.etoiles
        let nombreDeTour= 5;
        const [etoilesTableau, setEtoileTableau]= useState([])
        useEffect(()=>{
                while(nombreDeTour!==0){
                        
                        if(nombreDeLike!==0){
                               nombreDeLike -=1
                               listeEtoiles.push(etoileLike)
                              nombreDeTour-=1
                        } else {
                                listeEtoiles.push(EtoileUnlike)
                                
                               nombreDeTour-=1


                }}
                setEtoileTableau(listeEtoiles)
                

        },[props])

return <div className="note">
             <img src ={etoilesTableau[0]} alt ="etoile"/>
             <img src ={etoilesTableau[1]} alt="etoile"/>
             <img src ={etoilesTableau[2]} alt="etoile"/>
             <img src ={etoilesTableau[3]} alt="etoile"/>
             <img src ={etoilesTableau[4]} alt="etoile"/>
        </div>
}

export default EtoileNote