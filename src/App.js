import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

import Strategy from './Components/Ourservices/Strategy';
import Development from './Components/Ourservices/Development';
import Design from './Components/Ourservices/Design';
import Joinus from './Components/Joinus/Joinus';
import AboutUs from './Components/AboutUs/index';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>

      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services/product-strategy' component={Strategy} />
        <Route path='/services/product-design' component={Design} />
        <Route path='/services/product-development' component={Development} />
        <Route path='/services' component={Services} />
        <Route path='/joinus' component={Joinus} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
