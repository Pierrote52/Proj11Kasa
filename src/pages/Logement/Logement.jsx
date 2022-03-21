import {useParams} from 'react-router-dom'
import Header from '../../Component/Header/Header'
import data from '../../mokAPI/logements'

function Logement(){
    const {id}=useParams()
    
    return <div className='Logement'>
        <Header />
        <p>Fiche du logement {id}</p>
        
        </div>
}

export default Logement