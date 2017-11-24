import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onOtpRequest, onOtpRequestSuccess, onOtpRequestFailure } from './actions';

class ValidateOtp extends React.Component {
  componentDidMount() {
    console.log('inside otp validation', this.props.mobileNumber);
    this.props.requestOtp(this.props.mobileNumber);
  }
  render() {
    return !this.props.proceedToOtpVerification ? 
      (<Redirect to="/input-number" />) : (<div>login </div>);
  }
}

/**
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  return {
    otpRequested: state.otpValidation && state.otpValidation.otpRequested,
    otpRequestSuccess: state.otpValidation && state.otpValidation.otpRequestSuccess,
    proceedToOtpVerification: state.mobileNumber && state.mobileNumber.proceedToOtpVerification,
    mobileNumber: state.mobileNumber && state.mobileNumber.mobileNumber,
  };
}

/**
 *
 * @param {Object} dispatch
 * Anything return from function will be  received as props on the SmartComponent Container
 */
function mapDispatchToProps(dispatch) {
  return {
    requestOtp: data => dispatch(onOtpRequest(data)),
  };
}

/**
 * connect() promotes the simple component SmartComponent into a container or smart component
 * It makes all the actions and states from Redux store as a prop
 */
export default connect(mapStateToProps, mapDispatchToProps)(ValidateOtp);
