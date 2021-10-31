// import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Careers from './components/careers/Careers'
import OurTeam from './components/team/OurTeam';
import Shopping from './components/shopping/Shopping'
import { Navbar, Nav, Container } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">

              <Nav className="justify-content-center" activeKey="/">
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  </ Nav.Item>
                
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                  </ Nav.Item>
              
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/careers">Careers</Nav.Link>
                  </Nav.Item>
              
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                  </Nav.Item>
                
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/team">Our Team</Nav.Link>
                  </Nav.Item>
                
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/shopping">Shop</Nav.Link>
                  </Nav.Item>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div className="main">
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


{/* <Nav className="justify-content-center" activeKey="/">
          
<Nav.Item>
  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
</ Nav.Item>


<Nav.Item>
  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
</ Nav.Item>


<Nav.Item>
  <Nav.Link as={NavLink} to="/careers">Careers</Nav.Link>
</Nav.Item>


<Nav.Item>
  <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
</Nav.Item>


<Nav.Item>
  <Nav.Link as={NavLink} to="/team">Our Team</Nav.Link>
</Nav.Item>


<Nav.Item>
  <Nav.Link as={NavLink} to="/shopping">Shop</Nav.Link>
</Nav.Item>


</Nav> */}