import './App.css';
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
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/team">Our Team</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/shop">Shop</NavLink>
            </li>
          </ul>
        </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div className="main">
        <Switch>
        <Route path="/shop">
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
