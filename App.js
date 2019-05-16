import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './src/components/layouts/Navbar';
import Footer from './src/components/layouts/Footer';
import Landing from './src/components/layouts/Landing';
import Register from './src/components/auth/Register';
import Login from './src/components/auth/Login';
import './App.css';
import './Script';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <Navbar />
              <Route exact path="/" component={ Landing } />
                <div>
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                </div>
            <Footer />
          </Router>
        </div>
    );
  }
}

export default App;