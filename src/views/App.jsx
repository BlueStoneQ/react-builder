import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import List from '$views/demo1';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Abou12t1233</h2>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About123</Link>
      </li>
      <li>
        <Link to="/app/demo1">demo1</Link>
      </li>
    </ul>
  );
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/app/demo1' component={List} />
        </div>
      </Router>
    );
  }
}

export default hot(App);