import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../pages/Acceuil/acceuil";
import Logement from "../pages/Logement/Logement"
import Page404 from '../pages/Page404/Page404'
import APropos from '../pages/APropos/APropos';

function RouteManager(){
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/logement/:id" element={<Logement />}></Route>
      <Route path="/props" element ={<APropos />}></Route>
      <Route path="/Proj11Kasa" element={<App />}/>
      <Route path ="*" element ={<Page404/>}></Route>
      <Route path ="/error" element ={<Page404/>}></Route>
      
    
    </Routes>
    </BrowserRouter>

}
export default RouteManager;