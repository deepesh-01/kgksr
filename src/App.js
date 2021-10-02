import React, { Component } from 'react';
import {Header} from './Components/header.js';
import {Commitee} from './Components/commitee.js';
import {AboutUs} from './Components/aboutUs.js';
import {Home} from './Components/home.js';
import {ContactUs} from './Components/contactUs.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Header/>
      
          <Route exact path='/commitee' > <Commitee/> </Route>
          <Route exact path='/aboutus' > <AboutUs/> </Route>
          <Route exact path='/contactus' > <ContactUs/> </Route>
          <Route path='/' > <Home/> </Route>
          
        </Router>
      </div>
    );
  }
}

export default App;
