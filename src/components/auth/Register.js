import React, { Component } from 'react';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    console.log(newUser)
  }

  render() {
    return (
      <div className="landing">
          <div className="dark-overlay landing-inner">
            <main>
              <section className="login-form">
                <form onSubmit={ this.onSubmit }>
                  <div className="container">
                  <p>
                    Exchange
                    messages over the internet.
                  </p><br/>
                    <h1>Register Here</h1>
                    <hr />
                    <div>
                      <span className="alert"></span>
                      <input type="text" placeholder="First Name" name="firstName" id="firstName" aria-autocomplete="list" value={this.state.firstName} onChange={ this.onChange } required />
                    </div>

                    <div>
                      <span className="alert"></span>
                    <input type="text" placeholder="Last Name" name="lastName" id="lastName" aria-autocomplete="list" value={this.state.lastName} onChange={this.onChange} required />
                    </div>

                    <div>
                      <span className="alert"></span>
                    <input type="email" placeholder="Enter Email" name="email" id="email" aria-autocomplete="list" value={this.state.email} onChange={this.onChange} required />
                    </div>

                    <div>
                      <span className="alert"></span>
                    <input type="password" placeholder="Enter Password" name="password" id="password" value={this.state.password} onChange={this.onChange} required />
                    </div>

                    <span className="alert"></span>
                    <div className="clearfix">
                      <button type="submit" className="btn" id="signup">Sign Up</button>
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

export default Register;
