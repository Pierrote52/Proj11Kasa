import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./pages/Acceuil/acceuil";
import Header from './Component/Header/Header'
import Logement from "./pages/Logement/Logement"
import Page404 from './pages/Page404/Page404'
import APropos from './pages/APropos/APropos';
import Footer from './Component/Footer/footer';

ReactDOM.render(
  <React.StrictMode>
    
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}/>
     <Route path="/logement/:id" element={<Logement />}></Route>
     <Route path="/props" element ={<APropos />}></Route>
     <Route path="/Proj11Kasa" element={<App />}/>
     <Route path ="*" element ={<Page404/>}></Route>
     <Route path ="/error" element ={<Page404/>}></Route>
     
   
   </Routes>
   </BrowserRouter>
   <Footer/>
  
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
