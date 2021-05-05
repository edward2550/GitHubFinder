import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Home from './Components/Layout/pages/Home';
import User from './Components/Layout/users/User';
import Alert from './Components/Layout/Alert';
import About from './Components/Layout/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './Components/Layout/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
