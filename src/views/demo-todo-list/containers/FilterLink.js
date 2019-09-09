/**
 * 展示组件Link的容器组件
 */
import { connect } from 'react-redux';
import { setVisibilityFilter } from '$redux/actions/demo-todo-list';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

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
