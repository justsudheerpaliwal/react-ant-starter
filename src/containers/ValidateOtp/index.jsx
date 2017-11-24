import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onOtpRequest, onOtpRequestSuccess, onOtpRequestFailure } from './actions';

class ValidateOtp extends React.Component {

  componentDidMount() {
    if (!this.props.proceedToOtpVerification) {
      this.props.history.replace('/input-number');
    } else {
      this.props.requestOtp(this.props.mobileNumber);
    }
  }
  render() {
    return <div>login </div>;
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
 */
function mapDispatchToProps(dispatch) {
  return {
    requestOtp: data => dispatch(onOtpRequest(data)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValidateOtp));
