import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <nav className="topnav" id="topnav">
        <a>{ user.firstname } { user.lastname }</a>
        <a href="" onClick={this.onLogoutClick.bind(this)}>Logout</a>
      </nav>
    );

    const guestLinks = (
      <nav className="topnav" id="topnav">
        <Link to="/register" > Sign Up</Link>
        <Link to="/login" className="active">Login</Link>
      </nav>
    );

    return (
      <nav className="topnav" id="topnav" >
        <Link className="navbar-brand" to="/">EPIC | Mail</Link>
        {isAuthenticated ? authLinks : guestLinks}
      </nav >
    )
  }
}

Navbar.propTypes = {
  logooutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);