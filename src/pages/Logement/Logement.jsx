import {useParams} from 'react-router-dom'
import Header from '../../Component/Header/Header'
import {data} from '../../mokAPI/logements'
import {useState, useEffect}from 'react'
import Carousel from '../../Component/Carousel/Carousel'

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
    
    
    return !logement.pictures?null: <div className='Logement'>
        <Header />
        <Carousel pictures={logement.pictures}/>
        </div>
}

export default Logement