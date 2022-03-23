import './style/style.css'
import etoileLike from '../../assets/Like.png'
import EtoileUnlike from '../../assets/unLike.png'
import {useEffect, useState} from 'react'

function EtoileNote(props){
        let listeEtoiles =[]
        let nombreDeLike = props.etoiles
        let nombreDeTour= 5;
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

        },[props])

return <div className="note">
        <p>{nombreDeLike}</p>
             <img src ={listeEtoiles[0]}/>
             <img src=''/>
             <img src="" alt="" />
             <img src="" alt="" />
             <img src="" alt="" />
        </div>
}

export default EtoileNote