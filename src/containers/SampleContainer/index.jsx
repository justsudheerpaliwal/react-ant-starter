import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleAction } from './actions';

const SmartComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Smart Component</h1>
    </div>
  );
};

/**
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  /**
   * returns an object
   * Whatever is returned will be show up as props inside SmartComponent
   */
  return {
    sample: state.sample,
  };
}

/**
 *
 * @param {Object} dispatch
 * Anything return from function will be  received as props on the SmartComponent Container
 */
function mapDispatchToProps(dispatch) {
  /**
   * Whenever selectBook is called, the result should be passed to all our readers
   */
  return bindActionCreators({
    sampleAction,
  }, dispatch);
}

/**
 * connect() promotes the simple component SmartComponent into a container or smart component
 * It makes all the actions and states from Redux store as a prop
 */
export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent);
