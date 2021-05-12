import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import ContactsView from './view/ContactsView/ContactsView';
import HomeView from './view/HomeView/HomeView';
import RegistarionView from './view/RegistarationView/RegistationView';
import LoginView from './view/LoginView/LoginView';

import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
          <PublicRoute
            restricted
            path="/registration"
            component={RegistarionView}
            redirectTo="/"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/"
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
