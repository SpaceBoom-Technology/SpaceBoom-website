import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Joinus from './Components/Joinus/Joinus';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>

      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/joinus' component={Joinus} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
