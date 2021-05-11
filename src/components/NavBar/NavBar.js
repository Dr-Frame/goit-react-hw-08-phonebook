import React, { Component } from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';

const NavBar = () => (
  <header>
    <Navigation />
    <AuthNav />
  </header>
);

export default NavBar;
