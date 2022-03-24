import Header from "../../Component/Header/Header"
import { useMatch } from 'react-router-dom'
import './style/style.css'
import TableauPrincipale from "../../Component/TableauPrincipale/tableauPrincipale"

function App() {
    return <div className="body">
        <Header acceuilIsTrue={true}/>
    <div className="Baniere">
        <p><span>Chez vous,</span> partout et ailleurs</p>
        </div>
        <TableauPrincipale />
        </div>
}

export default App