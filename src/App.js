import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMe  from './pages/ContactMe';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portafolio-react" component={() => <LandingPage />}></Route>
        <Route exact path="/projects" component={() => <ProjectsPage />}></Route>
        <Route exact path="/contactme" component={() => <ContactMe />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
