import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Strategy from './Components/Ourservices/Strategy';
import Development from './Components/Ourservices/Development';
import ReactDevelopment from './Components/DevelopmentServices/ReactDevelopment';
import AndroidDevelopment from './Components/DevelopmentServices/AndroidDevelopment';
import IOSDevelopment from './Components/DevelopmentServices/IOSDevelopment';
import Design from './Components/Ourservices/Design';
import Joinus from './Components/Joinus/Joinus';
import AboutUs from './Components/AboutUs/index';
import ContactUs from './Components/ContactUs/ContactUs';
import AddBlog from './Components/Blog/AddBlog';
import ShowBlog from './Components/Blog/ShowBlog';
import Footer from './Components/Footer/Footer';
import BlogPage from './Components/Blog/BlogPage';
import Work from './Components/Work/Work';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services/product-strategy' component={Strategy} />
        <Route path='/services/product-design' component={Design} />
        <Route path='/services/product-development' component={Development} />
        <Route exact path='/services' component={Services} />
        <Route path='/joinus' component={Joinus} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Route path="/addblog" component={AddBlog} />
        <Route exact path="/blog" component={ShowBlog} />
        <Route path="/blog/:id" component={BlogPage} />
        <Route path="/work" component={Work} />
        <Route path='/services/reactdevelopment' component={ReactDevelopment} />
        <Route path='/services/iosdevelopment' component={IOSDevelopment} />
        <Route path='/services/androiddevelopment' component={AndroidDevelopment} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
export default App;
