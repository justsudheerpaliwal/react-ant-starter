import React from 'react';
import { connect } from 'react-redux';
import { onOtpNumberChange, onOtpNumberSubmit } from './actions';
import TopLayout from '../../components/top-layout/top-layout';

const SmartComponent = (props) => {
  return (
    <TopLayout {...props} />
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
    number: state.sample && state.sample.partialMobileNumber,
  };
}

/**
 *
 * @param {Object} dispatch
 * Anything return from function will be  received as props on the SmartComponent Container
 */
function mapDispatchToProps(dispatch) {
  return {
    onOtpNumberChange: data => dispatch(onOtpNumberChange(data)),
    onOtpNumberSubmit: data => dispatch(onOtpNumberSubmit(data)),
  };
}

/**
 * connect() promotes the simple component SmartComponent into a container or smart component
 * It makes all the actions and states from Redux store as a prop
 */
export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent);
