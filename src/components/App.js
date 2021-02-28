import HomePage from './HomePage'
import NavBar from './NavBar'
import LandscapesPage from './LandscapesPage'
import AboutPage from './AboutPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

library.add(fab, faEnvelope)

function App () {
    return(
        <Router>
        <div>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/landscapes">
              <LandscapesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;