import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { ButtonLink } from '../commons/Button';

export class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/inbox');
    }
  }

  render() {
    return (
      <>
        <div className="landing">
          <div className="dark-overlay landing-inner">
            <div className="middle">
              <h1 className="welcome-header">Welcome</h1>
              <br />
              <p className="welcome-note">EPIC-Mail is changing the way people share messages on the web.</p>
              <br />
              <ButtonLink href="/register" linkName="Get Started" linkClass="homebtn" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(Landing));
