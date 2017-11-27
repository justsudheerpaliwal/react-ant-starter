import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Button, Form } from 'semantic-ui-react';
import CustomInput from '../FormWrappers/CustomInput';

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
    const { handleSubmit, submitting, invalid, requestOtp} = this.props;
    return (
      <Grid verticalAlign='middle' centered>
        <Grid.Column>
          <Form onSubmit={handleSubmit} loading={submitting}>
            <Field
              component={CustomInput} name="otp"
              type="text" placeholder="Enter OTP"
              label="Enter OTP"
            />
            <Button style={{ marginTop: '1em' }} disabled={this.requestingOtp || invalid || submitting} primary type='submit'>
              {this.buttonText}
            </Button>
            <Button type="button" onClick={this.props.requestOtp} disabled={this.requestingOtp || submitting}> Resend OTP </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default reduxForm({
  form: 'otpValidationForm',
})(ValidateOtp);
