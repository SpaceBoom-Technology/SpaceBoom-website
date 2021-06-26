import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <React.Fragment>
      This is new app Spaceboom.
      <Switch>
        <Route component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
