import React, { Component } from 'react';
/* import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Filter from './components/Filter'; */
import NavBar from './components/NavBar';

import ContactsView from './view/ContactsView/ContactsView';
import { Route, Switch } from 'react-router';
import HomeView from './view/HomeView/HomeView';
import RegistarionView from './view/RegistarationView/RegistationView';
import LoginView from './view/LoginView/LoginView';
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations';

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
          <Route path="/contacts" component={ContactsView} />
          <Route exact path="/registration" component={RegistarionView} />
          <Route exact path="/login" component={LoginView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
