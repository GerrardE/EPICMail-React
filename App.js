import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './src/components/auth/Login';
import Navbar from './src/components/layouts/Navbar';
import Footer from './src/components/layouts/Footer';
import './App.css';
import './Script';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Login />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
{/* <Route exact path="/register" component={Register} />
  <Route exact path="/login" component={Login} /> */} 