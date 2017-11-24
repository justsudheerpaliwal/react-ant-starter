import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopLayout from './components/top-layout/top-layout';
import ValidateOtp from './containers/ValidateOtp';
import DashboardComponent from './containers/dashboard';
import InputMobileNumber from './containers/InputMobileNumber';

function getRoutedComponent(Component) {
  return () => (<TopLayout render={() => <Component />} />);
}

const App = () => (
  <Switch>
    <Route exact path="/" render={getRoutedComponent(InputMobileNumber)} />
    <Route exact path="/validate-otp" render={getRoutedComponent(ValidateOtp)} />
    <Route exact path="/input-number" render={getRoutedComponent(InputMobileNumber)} />
    <Route exact path="/dashboard" render={getRoutedComponent(DashboardComponent)} />
    <Route exact path="/logout" render={getRoutedComponent(InputMobileNumber)} />
  </Switch>
);

export default App;

