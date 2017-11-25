import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ValidateOtp extends React.Component {
  constructor(props) {
    super(props);
    this.requestingOtp = this.props.otpRequested && (!this.props.otpRequestSuccess && !this.props.otpRequestError);
    this.verifyingOtp = this.props.otpValidationRequested && (this.props.otpValidationSuccess && this.props.otpValidationError);
    this.buttonText = 'Submit OTP';
    if (this.requestingOtp) {
      this.buttonText = 'Requesting OTP';
    }
    if (this.verifyingOtp) {
      this.buttonText = 'Verifying OTP';
    }
    if (this.props.otpValidationError) {
      console.log(this.props.otpValidationError);
    }
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="otp" component="input" type="text" />
        <button type="button" onClick={this.props.requestOtp}> Resend OTP </button>
        <button type="submit" disabled={this.requestingOtp || this.verifyingOtp} >
          {this.buttonText}
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'otpValidationForm',
})(ValidateOtp);
