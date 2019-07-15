import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  openNav() {
    const sideNav = document.getElementById('mySidenav');
    const main = document.getElementById('main');
    sideNav.classList.add('sidebar');
    main.classList.add('content');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <nav className="topnav" id="topnav">
        <a>
          {user.firstname}
          {' '}
          {user.lastname}
        </a>
        <a href="" onClick={this.onLogoutClick.bind(this)}>Logout</a>
      </nav>
    );

    const guestLinks = (
      <nav className="topnav" id="topnav">
        <NavLink to="/register" activeClassName="active"> Sign Up</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
      </nav>
    );

    return (
      <nav className="topnav" id="topnav">
        {isAuthenticated
          ? <span id="hamburger" onClick={this.openNav}>&#9776;</span> : ''}
        <NavLink className="navbar-brand" to="/dashboard">EPIC | Mail</NavLink>
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
