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

ReactDOM.render(
  <React.StrictMode>
    
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}/>
     <Route path="/logement/:id" element={<Logement />}></Route>
     <Route path="/props" element ={<APropos />}></Route>
     <Route path ="*" element ={<Page404/>}></Route>
   
   </Routes>
   </BrowserRouter>
  
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
