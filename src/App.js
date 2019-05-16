import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
// import Login from './src/components/auth/Login';
import store from './store'
import './App.css';
import './Script'; 

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Landing} />
              <div>
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/login" component={Login} /> */}
              </div>
              <Footer />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;