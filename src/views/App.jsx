import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import mockDeom from '$views/mock-demo';
import DemoTodoList from './demo-todo-list';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <Link to="/app/demo1">mock-demo</Link>
      </li>
      <li>
        <Link to="/app/demo-todo-list">demo-todo-list</Link>
      </li>
    </ul>
  );
}

class App extends Component {
  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/app/demo1' component={mockDeom} />
          <Route path='/app/demo-todo-list' component={DemoTodoList} />
        </Switch>
      </Router>
    );
  }
}

export default hot(App);