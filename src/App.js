import React, { Component } from 'react';
/* import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Filter from './components/Filter'; */
import NavBar from './components/NavBar';

import ContactsView from './view/ContactsView/ContactsView';
import { Route, Switch } from 'react-router';
import HomeView from './view/HomeView';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/contacts" component={ContactsView} />
          <Route exact path="/registration" component={HomeView} />
          <Route exact path="/login" component={HomeView} />
        </Switch>
      </>
    );
  }
}
export default App;
