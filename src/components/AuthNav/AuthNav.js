import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AuthNav extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/registration">
          Registration
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
      </div>
    );
  }
}

export default AuthNav;
