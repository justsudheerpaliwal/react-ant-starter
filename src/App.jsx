import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopLayout from './components/top-layout/top-layout';
import LoginComponent from './containers/login';
import DashboardComponent from './containers/dashboard';
import OtpValidationComponent from './containers/otp-validation';

function getRoutedComponent(Component) {
  return () => (<TopLayout render={() => <Component />} />);
}

const App = () => (
  <Switch>
    <Route exact path="/" render={getRoutedComponent(OtpValidationComponent)} />
    <Route exact path="/login" render={getRoutedComponent(LoginComponent)} />
    <Route exact path="/verify-otp" render={getRoutedComponent(OtpValidationComponent)} />
    <Route exact path="/dashboard" render={getRoutedComponent(DashboardComponent)} />
  </Switch>
);

export default App;

