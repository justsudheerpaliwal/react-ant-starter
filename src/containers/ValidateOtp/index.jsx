import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  onOtpRequest,
  onOtpValidationRequested,
} from './actions';
import VaidateOtpComponent from '../../components/ValidateOtp';

class ValidateOtp extends React.Component {

  constructor(props) {
    super(props);
    this.requestOtp = this.requestOtp.bind(this);
    this.onSubmitOtp = this.onSubmitOtp.bind(this);
  }

  componentDidMount() {
    if (!this.props.proceedToOtpVerification) {
      this.props.history.replace('/input-number');
    } else {
      this.requestOtp();
    }
  }

  onSubmitOtp(value) {
    console.log('inside onSubmitOtp');
    const payload = {
      otp: value.otp,
      mobileNumber: this.props.mobileNumber,
    };
    this.props.onOtpValidationRequested(payload);
  }

  requestOtp() {
    this.props.requestOtp(this.props.mobileNumber);
  }

  render() {
    return (
      <VaidateOtpComponent
        requestOtp={this.requestOtp}
        onSubmit={this.onSubmitOtp}
        otpRequested={this.props.otpRequested}
        otpRequestSuccess={this.props.otpRequestSuccess} 
        otpRequestError={this.props.otpRequestError}
        otpValidationRequested={this.props.otpValidationRequested}
        otpValidationSuccess={this.props.otpValidationSuccess}
        otpValidationError={this.props.otpValidationError}
      />
    );
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
    otpRequestError: state.otpValidation && state.otpValidation.otpRequestError,
    proceedToOtpVerification: state.mobileNumber && state.mobileNumber.proceedToOtpVerification,
    mobileNumber: state.mobileNumber && state.mobileNumber.mobileNumber,
    otpValidationRequested: state.otpValidation && state.otpValidation.otpValidationRequested,
    otpValidationSuccess: state.otpValidation && state.otpValidation.otpValidationSuccess,
    otpValidationError: state.otpValidation && state.otpValidation.otpValidationError,
  };
}

/**
 *
 * @param {Object} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    requestOtp: data => dispatch(onOtpRequest(data)),
    onOtpValidationRequested: data => dispatch(onOtpValidationRequested(data)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValidateOtp));
