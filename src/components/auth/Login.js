import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import emailRegex from '../../validations/helpers';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/inbox');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/inbox');
    }
  }

  onChange = (e) => {
    const { errors } = this.state;
    const { name, value } = e.target;
    const trimVal = value.trim();

    switch (name) {
      case "email":
        errors.email =
          emailRegex.test(trimVal) && trimVal.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        errors.password =
          (trimVal.length < 6 && trimVal.length > 0) || trimVal.length === 0
            ? "A minimum of 6 characters is required"
            : "";
        break;
    }

    this.setState({
      [e.target.name]: e.target.value,
      errors
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, errors } = this.state;

    if (email === "" || password === "") return;

    const { email: mail, password: pass } = errors;
    if (mail !== "" || pass !== "") return;

    const loginUser = { email, password };

    this.props.loginUser(loginUser, this.props.history);
  }

  render() {
    const { errors, email, password } = this.state;

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <main>
            <div className="login-form">
              <form onSubmit={this.onSubmit}>
                <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p>
                  <h1>Sign in</h1>

                  <div>
                    <label htmlFor="email"><b>Email</b></label>
                    {errors.email && (<span className="alert">{errors.email}</span>)}
                    <input type="email" placeholder="eg: user@epic-mail.com" name="email" value={email} onChange={this.onChange} aria-autocomplete="list" />
                  </div><br />
                  <div>
                    <label htmlFor="psw"><b>Password</b></label>
                    {errors.password && (<span className="alert">{errors.password}</span>)}
                    <input type="password" placeholder="********" name="password" value={password} onChange={this.onChange} aria-autocomplete="list" />
                  </div>
                  <div>
                    <button type="submit" className="btn">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
