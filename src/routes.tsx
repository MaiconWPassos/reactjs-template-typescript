import React, { useContext } from 'react';
import { Route, Router, Redirect, RouteProps, Switch } from 'react-router-dom';

import { Context } from '~/context/AuthContext';
import history from '~/services/history';
import ScreenLoader from './components/ScreenLoader';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

interface PropsCustomRoute extends RouteProps {
  isPrivate?: boolean;
  admin?: boolean;
}

const CustomRoute: React.FC<PropsCustomRoute> = ({ isPrivate = false, admin = false, ...rest }) => {
  const { authenticated } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};

const Routes = () => {
  const { loading } = useContext(Context);

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <Router history={history}>
      <Switch>
        <CustomRoute path="/" component={Login} exact />
        <CustomRoute isPrivate path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
