import Header from "../../Component/Header/Header"
import './style/style.css'
import TableauPrincipale from "../../Component/TableauPrincipale/tableauPrincipale"
import Footer from "../../Component/Footer/footer"

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