import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SideNav extends Component {
  closeNav() {
    const sideNav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    sideNav.classList.remove("sidebar");
    main.classList.remove("content");
  }

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <Link to="#" className="closebtn" onClick={this.closeNav}>&times;</Link>
        <Link to="/groups" className="">Groups</Link>
        <Link to="/dashboard" className="select">Inbox</Link>
        <Link to="/sendmail" className="">SendMail</Link>
        <Link to="/sent" className="">Sent</Link>
        <Link to="/drafts" className="">Drafts</Link>
      </div>
    )
  }
}

export default SideNav;