import React, { Fragment } from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodo from './containers/VisibleTodoList';
import Footer from './components/Footer';


const DemoTodoList = () => (
  <Fragment>
    <AddTodo />
    <VisibleTodo />
    <Footer />
  </Fragment>
);

export default DemoTodoList;