import React, { Component } from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import './HomeView.scss';

class HomeView extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to the Phonebook App</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomeView);
