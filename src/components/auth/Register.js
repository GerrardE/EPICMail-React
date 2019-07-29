import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import emailRegex from '../../validations/helpers';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/inbox');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    const { password, errors } = this.state;
    const { name, value } = e.target;
    const trimVal = value.trim();

    switch (name) {
      case "firstName":
        errors.firstName =
          (trimVal.length < 3 && trimVal.length > 0) || trimVal.length === 0
            ? "A minimum of 3 and maximum of 30 characters is required"
            : "";
        break;
      case "lastName":
        errors.lastName =
          (trimVal.length < 3 && trimVal.length > 0) || trimVal.length === 0
            ? "A minimum of 3 characters is required"
            : "";
        break;
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
      case "confirmPassword":
        errors.confirmPassword =
          password !== trimVal || trimVal.length === 0
            ? "Passwords must match"
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
    const { firstName, lastName, email, password, errors } = this.state;
    if (firstName === "" || lastName === "" ||
      email === "" || password === ""
    ) return;

    const { firstName: firstname, lastName: lastname, email: mail, password: pass } = errors;
    if (firstname !== "" || lastname !== "" || mail !== "" || pass !== "") return;

    const newUser = { firstName, lastName, email, password };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <main>
            <section className="login-form">
              <form>
                <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p>
                  <h1>Sign up</h1>

                  <div>
                    {errors.firstName && (<span className="alert">{errors.firstName}</span>)}
                    <input type="text" placeholder="First Name" name="firstName" id="firstName" aria-autocomplete="list" value={this.state.firstName} onChange={this.onChange} />
                  </div>
                  <div>
                    {errors.lastName && (<span className="alert">{errors.lastName}</span>)}
                    <input type="text" placeholder="Last Name" name="lastName" id="lastName" aria-autocomplete="list" value={this.state.lastName} onChange={this.onChange} />
                  </div>
                  <div>
                    {errors.email && (<span className="alert">{errors.email}</span>)}
                    <input type="email" placeholder="Email e.g: user@epic-mail.com" name="email" id="email" aria-autocomplete="list" value={this.state.email} onChange={this.onChange} />
                  </div>
                  <div>
                    {errors.password && (<span className="alert">{errors.password}</span>)}
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
                  </div>
                  <div>
                    {errors.confirmPassword && (<span className="alert">{errors.confirmPassword}</span>)}
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} />
                  </div>
                  <div className="clearfix">
                    <button className="btn" onClick={this.onSubmit}>Sign Up</button>
                  </div>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
