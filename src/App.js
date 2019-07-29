import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
import SendMail from './components/dashboard/SendMail';
import Sent from './components/dashboard/Sent';
import Drafts from './components/dashboard/Drafts';
import Inbox from './components/dashboard/Inbox';
import NotFound from './components/layouts/NotFound';

// Check for token
if (localStorage.jwtToken) {
  // Set the token authorization for headers
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info/token expiration
  const decoded = jwtDecode(localStorage.jwtToken);

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
      <Fragment>
        <ToastContainer position="top-right" />
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/inbox" component={Inbox} />
              <PrivateRoute exact path="/sendmail" component={SendMail} />
              <PrivateRoute exact path="/sent" component={Sent} />
              <PrivateRoute exact path="/drafts" component={Drafts} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
