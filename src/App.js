import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import { AppTheme } from 'containers';
import { store } from 'reducers';
import * as config from 'config';

config.run();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppTheme>
        <Router>
          <Switch>
            <Route path='/' component={PublicLayout} />
          </Switch>
        </Router>
      </AppTheme>
    </ReduxProvider>
  );
};

export default App;
