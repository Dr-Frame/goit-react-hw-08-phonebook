import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserNav from '../UserNav';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const NavBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {/* не забіть убрать ! */}
    {!isAuthenticated ? <AuthNav /> : <UserNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
