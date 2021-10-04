import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import * as config from 'config';

config.run();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={PublicLayout} />
      </Switch>
    </Router>
  );
};

export default App;
