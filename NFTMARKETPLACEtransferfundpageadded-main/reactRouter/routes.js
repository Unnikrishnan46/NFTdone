import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../adminPanel/dashboard';


function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin">
            {Dashboard}
          </Route>
        </Switch>
      </Router>
    );
  }