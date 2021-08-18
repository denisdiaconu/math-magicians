import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" exact component={Calculator} />
            <Route path="/quote" exact component={Quote} />
          </Switch>
        </Router>
      </div>
    );
  }
}
