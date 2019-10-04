import { connect } from 'react-redux';
import { toggleTodo } from '$redux/actions/demo-todo-list';
import TodoList from '../components/TodoList';
import { SHOW_ALL, SHOW_COMPELETED, SHOW_ACTIVE } from '../constants';

/**
 * 让两个state值共同参与计算
 * @param {*} todos 
 * @param {*} filter 
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case SHOW_COMPELETED:
    return todos.filter(t => t.completed);
  case SHOW_ACTIVE:
    return todos.filter(t => !t.completed);
  case SHOW_ALL:
  default:
    return todos;
  }
};

const mapStateToProps = state => {
  return {
    // 更新要显示的todo给TodoList组件
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);