import Header from "../../Component/Header/Header"
import { useMatch } from 'react-router-dom'
import './style/style.css'
import TableauPrincipale from "../../Component/TableauPrincipale/tableauPrincipale"

function App() {
    return <div>
        <Header />
    <div className="Baniere">
        <p>Chez vous, partout et ailleur</p>
        </div>
        <TableauPrincipale />
        </div>
}

export default App