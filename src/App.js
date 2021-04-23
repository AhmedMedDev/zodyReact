import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './index.css';
import './js/main.js';


import Nav from'./Component/Navbar/index';
import './Component/Navbar/style.css';

import Header from'./Component/Header';
import './Component/Header/style.css';

import Lorem from'./Component/Lorem';
import './Component/Lorem/style.css';

import Feature from'./Component/Feature';
import './Component/Feature/style.css';

import What from'./Component/What';
import './Component/What/style.css';

import Purus from'./Component/Purus';
import './Component/Purus/style.css';

import Footer from'./Component/Footer/footer';
import './Component/Footer/style.css';

import Comming from'./Component/Comming/index';
import './Component/Comming/style.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={Nav} />
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Feature} />
      <Route exact path="/" component={Lorem} />
      <Route exact path="/" component={What} />
      <Route exact path="/" component={Purus} />
      <Route exact path="/" component={Footer} />

      <Route path="/ContactUs" component={Comming} />

    </div>
    </BrowserRouter>
  );
}

export default App;
