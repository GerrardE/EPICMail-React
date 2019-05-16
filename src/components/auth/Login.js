import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }

    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(loginUser)
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <main>
            <div className="login-form">
              <form onSubmit={ this.onSubmit }>
                <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p>
                  <h1>Login</h1>
                  <hr />
                  <div>
                    <span className="alert"></span>
                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="eg: test@epic-mail.com" name="email" id="email" value={ this.state.email } onChange={ this.onChange } required aria-autocomplete="list"></input>
                  </div>
                  <div>
                    <span className="alert"></span>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="********" name="password" id="password" value={this.state.password} onChange={ this.onChange } required aria-autocomplete="list"></input>
                  </div>
                  <div className="container">
                    <span className="alert"></span>
                    <button type="submit" className="btn">LOGIN</button>
                    <Link type="button" className="deletebtn" to="/reset-password"><nobr>RESET PASSWORD</nobr></Link>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Login