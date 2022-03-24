import { Link } from 'react-router-dom'

import './style/style.css'
import Logo from '../../assets/logoKasa.png'; 

function Header(props) {

    return (
        <header>
            <img src={Logo} alt="Logo Kasa"></img>
            <div className="headerClassLinks">
                <Link to="/" className={props.acceuilIsTrue && "active"}>ACCEUIL</Link>
                <Link to="/props" className={props.AProposIsTrue &&"active"}>A PROPOS</Link></div>
        </header>
    )
}
export default Header