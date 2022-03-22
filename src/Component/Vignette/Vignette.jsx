import './style/style.css'
import {Link} from 'react-router-dom'

function Vignette ({title,img, id}){
  
    return <Link to={`/logement/${id}`}><article className="vignette" style={{backgroundImage:`url(${img})`}}><p>{title}</p></article></Link>
}

export default Vignette