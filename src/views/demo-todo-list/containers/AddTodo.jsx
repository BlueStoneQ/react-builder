/**
 * 用来增加todo的按钮
 * 1- 因为与redux产生交互 所以 作为容器组件放在containers/中
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '$redux/actions/demo-todo-list';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => (input = node)}
        />
        <button type='submit'>
          Add todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// 给AddTodo注入dispatch
export default connect()(AddTodo);