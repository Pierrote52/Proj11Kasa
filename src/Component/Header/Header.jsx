import { Link } from 'react-router-dom'
import { styled } from 'react-dom'
import './style/style.css'
import Logo from '../../assets/logoKasa.png'; 

function Header() {
    return (
        <header>
            <img src={Logo}></img>
            <div className="headerClassLinks">
                <Link to="/" className="active">Acceuil</Link>
                <Link to="/props">A propos</Link></div>
        </header>
    )
}
export default Header