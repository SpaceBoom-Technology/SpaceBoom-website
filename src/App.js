import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>

      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
