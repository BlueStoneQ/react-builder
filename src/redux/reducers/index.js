import { combineReducers } from 'redux';
import todos from './demo-todo-list/todo';
import visibilityFilter from './demo-todo-list/visibilityFilter';

const store = combineReducers({
  todos,
  visibilityFilter
});

export default store;