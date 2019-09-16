/**
 * 展示组件Link的容器组件
 */
import { connect } from 'react-redux';
import { setVisibilityFilter } from '$redux/actions/demo-todo-list';
import Link from '../components/Link';

/**
 * 从redux store中读取state
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

/**
 * 写入redux store中
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
