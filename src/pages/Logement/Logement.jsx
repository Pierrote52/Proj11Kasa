import {useParams} from 'react-router-dom'
import Header from '../../Component/Header/Header'
import {data} from '../../mokAPI/logements'
import {useState, useEffect}from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import './style/style.css'
import Tags from '../../Component/Tags/Tags'
import EtoileNote from '../../Component/NoteEtoile/NoteEtoile'
import Deroulant from '../../Component/Deroulant/Deroulant'

function Logement(){
    const {id}=useParams()
    const [logement, setLogement] = useState({})

            useEffect(()=>{
                data.map((element)=>{
        if(element.id === id){
           setLogement(element)
        }
        
        
    });
            })
    
    
    return !logement.pictures?null: 
    <div className='Logement'>
        <Header />
        <Carousel pictures={logement.pictures}/>
        <div className="TitreEtTags">
                <div>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <Tags Tags={logement.tags}/>

                </div>
                <div className="HoteEtNote">
                        <div className="Hote">
                                <p>{logement.host.name}</p>
                                <div className="photoProfil" style={{backgroundImage:`url(${logement.host.picture})`}}>
                                </div>
                        </div>
                        <div className="Note">
                                <EtoileNote etoiles={logement.rating}/>

                        </div>
                        
                </div>
                
        </div>
        <div className="EquipementEtDescription">
                <Deroulant logement={logement}/>

        </div>
        </div>
}

export default Logement