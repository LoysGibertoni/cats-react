import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import BreedsList from './BreedsList';
import BreedsDetails from './BreedDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">Cats</Link>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/:id" component={BreedsDetails} />
          <Route path="/" component={BreedsList} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
