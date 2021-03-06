import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  onOtpRequest,
  onOtpValidationRequested,
} from './actions';
import VaidateOtpComponent from '../../components/ValidateOtp';
import { ACCESS_TOKEN } from '../../constants';

class ValidateOtp extends React.Component {

  constructor(props) {
    super(props);
    this.requestOtp = this.requestOtp.bind(this);
    this.onSubmitOtp = this.onSubmitOtp.bind(this);
  }

  componentDidMount() {
    const isAuthenticated = localStorage.getItem(ACCESS_TOKEN);
    if (isAuthenticated) {
      this.props.history.replace({
        pathname: '/dashboard',
      });
    }

    if (!this.props.proceedToOtpVerification) {
      this.props.history.replace('/input-number');
    } else {
      this.requestOtp();
    }
  }

  onSubmitOtp(value) {
    const payload = {
      otp: value.otp,
      mobileNumber: this.props.mobileNumber,
      type: this.props.type,
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
  const { otpValidation } = state;
  return {
    otpRequested: otpValidation && otpValidation.otpRequested,
    otpRequestSuccess: otpValidation && otpValidation.otpRequestSuccess,
    otpRequestError: otpValidation && otpValidation.otpRequestError,
    proceedToOtpVerification: state.mobileNumber && state.mobileNumber.proceedToOtpVerification,
    mobileNumber: state.mobileNumber && state.mobileNumber.mobileNumber,
    type: state.mobileNumber && state.mobileNumber.type,
    otpValidationRequested: otpValidation && otpValidation.otpValidationRequested,
    otpValidationSuccess: otpValidation && otpValidation.otpValidationSuccess,
    otpValidationError: otpValidation && otpValidation.otpValidationError,
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
