import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Introduction from './components/pages/Introduction';
import Navbar from './components/pages/Navbar';
import Skills from './components/pages/Skills';
import Project from './components/pages/Project';
import About from './components/pages/About';
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>

      <Switch>

      <Route exact path="/">
      <Introduction/>
      </Route>

      <Route path="/skills">
      <Skills/>
      </Route>

      <Route path="/about">
      <About/>
      </Route>

      <Route path="/work">
      <Project/>
      </Route>

      </Switch>
        
    </div> 
    </Router>
    
    
  );
}

export default App;
