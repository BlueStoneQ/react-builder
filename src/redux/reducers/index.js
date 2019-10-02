import { combineReducers } from 'redux';
import demoTodoList from './demo-todo-list';

const reducer = combineReducers({
  ...demoTodoList
});

export default reducer;