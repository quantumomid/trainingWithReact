// import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Careers from './components/careers/Careers'
import OurTeam from './components/team/OurTeam';
import Shopping from './components/shopping/Shopping'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return ( 
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
              </li >
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Our Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping">Shop</Link>
              </li>
            </ul>
          </div>
        </ nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div className="border d-flex align-items-center justify-content-center">
        <Switch>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/team">
            <OurTeam />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
