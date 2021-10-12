import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <main>
      <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/services" exact>
            <Services/>
          </Route>

          <Redirect to="/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
