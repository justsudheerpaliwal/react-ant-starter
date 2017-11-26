import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopLayout from './components/top-layout/top-layout';
import ValidateOtp from './containers/ValidateOtp';
import DashboardComponent from './containers/dashboard';
import InputMobileNumber from './containers/InputMobileNumber';
import ProtectedRoute from './utils/ProtectedRoute';

function getRoutedComponent(Component) {
  return () => (<TopLayout render={() => <Component />} />);
}

const App = () => (
  <Switch>
    <Route exact path="/" component={getRoutedComponent(InputMobileNumber)} />
    <Route exact path="/validate-otp" component={getRoutedComponent(ValidateOtp)} />
    <Route exact path="/input-number" component={getRoutedComponent(InputMobileNumber)} />
    <ProtectedRoute exact path="/dashboard" component={getRoutedComponent(DashboardComponent)} />
  </Switch>
);

export default App;

