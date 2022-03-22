import Sparow from "../../assets/Vector.png"
import './style/style.css'

function Deroulant(props){
    return  <div className="deroulant">
                <div className="titleEtSparow">
                    <p>Titre</p>
                    <button><img src={Sparow} alt="derouler"/></button>
                </div>
                <div>
                    <p>contenue</p>
                </div>

            </div>

}

export default Deroulant

