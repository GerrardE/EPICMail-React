import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Loading from '../commons/Loading';
/**
 *
 *
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(loginUser, this.props.history);
  }

  render() {
    const { errors, auth: { loading, isAuthenticated } } = this.props;
    let setLoading;

    if (isAuthenticated === false && loading) {
      setLoading = <Loading/>;
    } else {
      setLoading = <button type="submit" className="btn"> LOGIN</button>;
    }

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <main>
            <div className="login-form">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p>
                  <h1>Login</h1>
                  {errors.message && (<span className="alert">{errors.message}</span>)}
                  <div>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="eg: test@epic-mail.com" name="email" id="email" value={this.state.email} onChange={this.onChange} required aria-autocomplete="list" />
                  </div><br/>
                  <div>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="********" name="password" id="password" value={this.state.password} onChange={this.onChange} required aria-autocomplete="list" />
                  </div>
                  <div>
                    {setLoading}
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
