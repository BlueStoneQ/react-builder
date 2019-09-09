import { combineReducers } from 'redux';
import demoTodoList from './demo-todo-list';

const store = combineReducers({
  ...demoTodoList
});

export default store;