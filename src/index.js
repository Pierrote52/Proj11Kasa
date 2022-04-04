import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Footer from './Component/Footer/footer';
import RouteManager from './Routes/Route';

ReactDOM.render(
  <React.StrictMode>
    <RouteManager/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
