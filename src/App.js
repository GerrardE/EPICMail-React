import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import './App.css';
import PrivateRoute from './components/commons/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

// Check for token
if (localStorage.jwtToken) {
  // Set the token authorization for headers
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info/token expiration
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set the current user(call the setCurrentUser Action & also set isAuthenticated)
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
              <Route exact path="/" component={Landing} />
              <div>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                </Switch>
                {/* <Switch>
                  <PrivateRoute exact path="/groups" component={Dashboard}/>
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/sent" component={Dashboard}/>
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/create" component={Dashboard}/>
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/drafts" component={Dashboard}/>
                </Switch> */}
              </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;