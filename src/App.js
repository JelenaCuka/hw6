import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.scss';//+delete that file 
import { action, decorate, observable, reaction, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import sessionStore from './stores/sessionStore/sessionStore';
//Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';

//Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';


class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/events" component={Events}  />
          <PrivateRoute path="/speakers" component={Speakers}  />
        </Main>

      </>
    );
  }

}

//export default App;
function mapServicesToProps() {
  return {
      sessionStore
  }
}

export default inject(mapServicesToProps)(observer(App));
