import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <main>
            <section className="login-form">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p><br />
                  <h1>Register Here</h1>
                  <hr />
                  {errors.message && (<span className="alert">{ errors.message }</span>)}
                  <div>
                    <input type="text" placeholder="First Name" name="firstName" id="firstName" aria-autocomplete="list" value={this.state.firstName} onChange={this.onChange} required />
                  </div>

                  <div>
                    <input type="text" placeholder="Last Name" name="lastName" id="lastName" aria-autocomplete="list" value={this.state.lastName} onChange={this.onChange} required />
                  </div>

                  <div>
                    <input type="email" placeholder="Enter Email" name="email" id="email" aria-autocomplete="list" value={this.state.email} onChange={this.onChange} required />
                  </div>

                  <div>
                    <input type="password" placeholder="Enter Password" name="password" id="password" value={this.state.password} onChange={this.onChange} required />
                  </div>

                  <div className="clearfix">
                    <button type="submit" className="btn" id="signup">Sign Up</button>
                    <div className="loader."></div>
                  </div>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter (Register));
