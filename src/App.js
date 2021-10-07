import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import { AppTheme } from 'containers';
import * as config from 'config';

config.run();

const App = () => {
  return (
    <AppTheme>
      <Router>
        <Switch>
          <Route path='/' component={PublicLayout} />
        </Switch>
      </Router>
    </AppTheme>
  );
};

export default App;
