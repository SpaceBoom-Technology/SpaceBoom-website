import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Joinus from './Components/Joinus/Joinus';
import ContactUs from './Components/ContactUs/ContactUs';
import AddBlog from './Components/Blog/AddBlog';
import ShowBlog from './Components/Blog/ShowBlog';
import Footer from './Components/Footer/Footer';
import BlogPage from './Components/Blog/BlogPage';

function App() {
  return (
    <React.Fragment>

      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/joinus' component={Joinus} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/addblog" component={AddBlog} />
        <Route exact path="/blog" component={ShowBlog} />
        <Route path="/blog/:id" component={BlogPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
