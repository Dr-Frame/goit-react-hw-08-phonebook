import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink exact to="/">
        Main
      </NavLink>
      {isAuthenticated && (
        <NavLink exact to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
