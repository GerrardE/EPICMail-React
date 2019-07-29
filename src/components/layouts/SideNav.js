import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SideNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  closeNav = () => {
    const sideNav = document.getElementById('mySidenav');
    const main = document.getElementById('main');
    sideNav.classList.remove('sidebar');
    main.classList.remove('content');
  }

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <NavLink to="#" className="closebtn" onClick={this.closeNav}>&times;</NavLink>
        <NavLink to="/inbox" activeClassName="select">Inbox</NavLink>
        <NavLink to="/sendmail" activeClassName="select">SendMail</NavLink>
        <NavLink to="/sent" activeClassName="select">Sent</NavLink>
        <NavLink to="/drafts" activeClassName="select">Drafts</NavLink>
      </div>
      );
    }
  }
  
  export default SideNav;
