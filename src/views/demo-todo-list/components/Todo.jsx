import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.less';

const Todo = ({ onClick, completed = false, text }) => (
  <li
    className={styles.todo}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none' 
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;