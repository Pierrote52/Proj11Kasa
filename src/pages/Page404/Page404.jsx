import { Link } from "react-router-dom"
import Header from "../../Component/Header/Header"
import './style/style.css'


function Page404(){
    return <div className="body">
    <Header />
    <div className="PageNotFound">
    <h1>404</h1>
    <p>Oups ! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
    </div>
    
        
}

export default Page404