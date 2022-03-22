import './style/style.css'
import {data} from '../../mokAPI/logements'
import Vignette from '../Vignette/Vignette'

function TableauPrincipale(){
    return (
        <main>
            {data.map((logement, index)=>{
               
                return <Vignette key={`${logement.title}- ${index}`} title={logement.title} img={logement.cover} index={index} id={logement.id}/>
            })}
        </main>
    )
}

export default TableauPrincipale