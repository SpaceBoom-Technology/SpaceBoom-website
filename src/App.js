import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>

      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
