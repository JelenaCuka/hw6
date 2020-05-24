import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';

class App extends Component {

  triggerLogout = () => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'logout') {
        window.location.assign("");
      }
    });
  }

  componentDidMount() {
    this.triggerLogout();
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/speakers" component={Speakers} />
        </Main>
      </>
    );
  }
}

export default App;
