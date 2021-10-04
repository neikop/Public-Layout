import { Switch, Route, Redirect } from 'react-router-dom';
import { AppHeader, AppFooter } from 'containers';
import { publicRoute } from 'routes';

const PublicLayout = () => {
  return (
    <div className='App Public-Layout'>
      <AppHeader />
      <div className='App-Body'>
        <Switch>
          {Object.values(publicRoute).map(({ path, component }) => (
            <Route exact key={path} path={path} component={component} />
          ))}
          <Redirect from='/' to={publicRoute.home.path} />
        </Switch>
      </div>
      <AppFooter />
    </div>
  );
};

export default PublicLayout;
